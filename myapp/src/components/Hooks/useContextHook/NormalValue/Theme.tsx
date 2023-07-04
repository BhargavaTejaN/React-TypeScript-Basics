export type ThemeProps = {
    primary: {
      main: string;
      text: string;
    };
    secondary: {
      main: string;
      text: string;
    };
  };

export const Theme : ThemeProps = {
    primary : {
        main : '#3f51b5',
        text : '#fff'
    },
    secondary : {
        main : '#f50057',
        text : '#fff'
    },
}