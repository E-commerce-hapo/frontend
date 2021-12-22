export interface MenuItem {
  name: string;
  route: Array<string>;
  href?: string;

  /**
   * use either matIcon or icon. DO NOT use both
   */
  icon?: string;

  /**
   * use either matIcon or icon. DO NOT use both
   */
  matIcon?: string;
  matIconOutlined?: boolean;

  hidden?: boolean;
  display_submenus?: boolean;
  submenus?: Array<{
    name: string;
    route: Array<string>;
    params?: any;
    hidden?: boolean;
    permissions?: string[];
  }>;
  permissions?: string[];
  roles?: string[];
  icon_color?: string;
  name_custom?: string;
  isDivider?: boolean;
  onClick?: () => any;

  onlyDesktop?: boolean;
}
