import fs, { read } from 'fs';
import archiver from 'archiver';
import axios from 'axios';

export async function GET(req: Request) {
    const output = fs.createWriteStream('awvre-press-kit.zip');
    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
      });

      output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
      });

      output.on('end', function() {
        console.log('Data has been drained');
      });

      archive.pipe(output);

      const pressKitData = await axios.post(process.env.HYGRAPH_CONTENT_URL, JSON.stringify({
        query: `
        {
            pressKit (where: {id: "clt0juqjevfja0div6ql008cg"}) {
              primaryColor {
                hex
              }
              secondaryColor {
                hex
              }
              fullImages {
                fileName
                mimeType
                url
              }
              currentLogo {
                fileName
                mimeType
                url
              }
            }
          }
        `
      }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.HYGRAPH_API_KEY}`
        },
    }).then((response) => {
        if (response.status === 200) {
            return response.data.data.pressKit;
        }
    }).catch((error) => {
        console.error(error);
        return null;
    });

    if (!pressKitData) {
        return new Response("Error fetching press kit data", { status: 500 });
    }

    const pressKitFiles: File[] = [];
    for (const image of pressKitData.fullImages) {
        const file = await axios.get(image.url, { responseType: 'arraybuffer' }).then((response) => {
            return new File([response.data], image.fileName, { type: image.mimeType });
        }).catch((error) => {
            console.error(error);
            return null;
        });

        if (file) {
            pressKitFiles.push(file);
        }
    }

    const logoFile = await axios.get(pressKitData.currentLogo.url, { responseType: 'arraybuffer' }).then((response) => {
        return new File([response.data], pressKitData.currentLogo.fileName, { type: pressKitData.currentLogo.mimeType });
    }).catch((error) => {
        console.error(error);
        return null;
    });

    if (!logoFile) {
        return new Response("Error fetching logo file", { status: 500 });
    }

    pressKitFiles.push(logoFile);

    const hexCodesFile = new File([JSON.stringify({
        primaryColor: pressKitData.primaryColor.hex,
        secondaryColor: pressKitData.secondaryColor.hex
    })], 'hexCodes.json', { type: 'application/json' });

    pressKitFiles.push(hexCodesFile);

    for (const file of pressKitFiles) {
        archive.file(file.name, file);
    }

    await archive.finalize();

    const readStream = fs.createReadStream(output.path)

    return new Response(null, {
        status: 200,
        headers: {
            'Content-Type': 'application/zip',
            'Content-Disposition': 'attachment; filename=awvre-press-kit.zip'
            },
        });
}