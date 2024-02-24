import { HTMLAttributes } from "react";

export interface MasonaryImageGridProps extends HTMLAttributes<HTMLDivElement> {
    imageUrls: string[];
}