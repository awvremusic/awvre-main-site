'use client'
import { AWVRENameLogoV1, Container, Text } from "@awvremusic/awvre-ui-web";
import MasonaryImageGridContainer from "./MasonaryImageGrid";
import { PressKitPageData } from "../../../../types";

const ColorSection = ({ color, title }: { color: string, title: string }) => {
    return (
        <div className="color-section p-5 my-5">
            <Text variant="h3" className="mb-5">{title}</Text>
            <div className="flex flex-row items-center gap-5">
                <Text variant="h3" className="mb-5">{color}</Text>
                <div style={{backgroundColor: color, width: 150, height: 150}}></div>
            </div>
        </div>
    )
}

export const PressKitPage = ({data}: {data: PressKitPageData}) => {
  return (
    <Container className="p-5" style={{backgroundColor: "transparent"}}>
      <Text variant="h1" className="mb-10">Press Kit</Text>
        <AWVRENameLogoV1 height={"10vh"} fill={"#000"}/>
        {/* <Text variant="body1" className="font-bold mt-5 mb-5">Pronounced: Uh-Wehr</Text> */}
        <Text variant="body1" className="mt-5 mb-5">This is the official AWVRE name logo. We would like to keep this in black, white, or the primary color as shown below</Text>
        <Text variant="h2" className="my-10">Description</Text>
        <Text variant="body1" className="mb-5">{data.description}</Text>
        <Text variant="h2" className="my-10">Brand Colors</Text>
        <ColorSection color={data.primaryColor} title={"Primary Color"} />
        <ColorSection color={data.secondaryColor} title={"Secondary Color"} />
        <Text variant="h2" className="mb-10">Photo Gallery</Text>
      <MasonaryImageGridContainer imageUrls={data.imageUrls ?? []} />
    </Container>
  );
}