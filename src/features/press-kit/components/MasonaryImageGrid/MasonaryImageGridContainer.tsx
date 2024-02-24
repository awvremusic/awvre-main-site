import styled from "styled-components";
import { MasonaryImageGridProps } from "./MasonaryImageGrid.types";
import { useIsMobile } from "@awvremusic/awvre-ui-web";
import React from "react";
import Image from "next/image";

// const StyledGrid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     gap: 10px;
//     grid-auto-rows: 50px;
// `;

// export const MasonaryImageGridContainer = (props: MasonaryImageGridProps) => {
//     const isMobile = useIsMobile();
//     const gridContainerRef = React.useRef<HTMLDivElement>(null);
//     const { imageUrls, ...rest } = props;

//     const resizeGridItem = (grid: HTMLDivElement, item: HTMLImageElement) => {
//         const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//         const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//         const itemImage = item.querySelector('.item-image');

//         if (itemImage) {
//             const rowSpan = Math.ceil((itemImage.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
//             item.style.gridRowEnd = `span ${rowSpan}`;
//         }
//     }

//     const resizeAllGridItems = (grid: HTMLDivElement) => {
//         const allItems = document.getElementsByClassName("item");

//         for(let x = 0; x < allItems.length; x++){
//             const item = allItems[x];
//             resizeGridItem(grid, item as HTMLImageElement);
//         }
//     }

//     React.useEffect(() => {
//         const grid = gridContainerRef.current;
//         if (grid) {
//             window.onload = () => {
//                 resizeAllGridItems(grid);
//             }

//             window.addEventListener("resize", () => {
//                 resizeAllGridItems(grid);
//             });

//             resizeAllGridItems(grid);

//             return () => {
//                 window.removeEventListener("resize", () => {
//                     resizeAllGridItems(grid);
//                 });
//             }
//         }

//         return () => {};
//     }, [gridContainerRef.current]);

//     if (isMobile) {
//         return (
//             <div
//                 className={`masonary-image-grid flex flex-col items-center gap-10 ${rest.className ?? ""}`}
//                 {...rest}
//             >
//                 {imageUrls.map((url, index) => (
//                     <img key={index} src={url} alt={`Image ${index}`} style={{ width: 300, height: 300, objectFit: "contain"}} />
//                 ))}
//             </div>
//         )
//     }

//     return (
//         <StyledGrid
//         ref={gridContainerRef}
//         className={`masonary-image-grid grid ${rest.className ?? ""}`}
//         {...rest}
//     >
//             {imageUrls.map((url, index) => (
//                 <div className="item"  key={index}>
//                     <Image
//                         src={url}
//                         alt={`Image ${index}`}
//                         className="item-image"
//                         width={200}
//                         height={250}
//                         style={{
//                             width: "100%",
//                             height: "100%",
//                             minHeight: 250,
//                             objectFit: "cover",
//                         }} 
//                     />
//                 </div>
//             ))}
//         </StyledGrid>
//     );
// }

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
    grid-auto-rows: 300px;
`;

export const MasonaryImageGridContainer = (props: MasonaryImageGridProps) => {
    const isMobile = useIsMobile();
    const gridContainerRef = React.useRef<HTMLDivElement>(null);
    const { imageUrls, ...rest } = props;

    if (isMobile) {
        return (
            <div
                className={`masonary-image-grid flex flex-col items-center gap-10 ${rest.className ?? ""}`}
                {...rest}
            >
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Image ${index}`} style={{ width: 300, height: 300, objectFit: "contain"}} />
                ))}
            </div>
        )
    }

    return (
        <StyledGrid
        ref={gridContainerRef}
        className={`masonary-image-grid grid ${rest.className ?? ""}`}
        {...rest}
    >
            {imageUrls.map((url, index) => (
                <div className="item"  key={index}>
                    <Image
                        src={url}
                        alt={`Image ${index}`}
                        className="item-image"
                        width={200}
                        height={300}
                        style={{
                            width: "100%",
                            height: "100%",
                            minHeight: 250,
                            objectFit: "cover",
                            objectPosition: "center"
                        }} 
                    />
                </div>
            ))}
        </StyledGrid>
    );
}