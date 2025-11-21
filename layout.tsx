
import { Box } from "@sanity/ui";

import { LayoutProps } from "sanity";
import { GtmLoader } from "./gtm-loader";

export const Layout = (props: LayoutProps) => (
  <>
    <GtmLoader />
    <Box className="crime themelight h-lvh">{props.renderDefault(props)}</Box>
  </>
);