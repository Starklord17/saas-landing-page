
declare module '../constants' {
  export interface Feature {
    id: string;
    icon: string;
    caption: string;
    title: string;
    text: string;
    button: string;
  }

  export const features: Feature[];
}