import * as React from "react";
// @ts-ignore: don't have a types file for jss
import injectSheet from "react-jss";

import { IFooterProps, IProps } from "./types";

const Footer = ({ classes }: IProps) => <div className={classes.container}>footer</div>;

const styles = {
  container: {
    borderTopStyle: "solid",
    borderWidth: 1,
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
  },
};

export default injectSheet(styles)(Footer) as React.SFC<IFooterProps>;
