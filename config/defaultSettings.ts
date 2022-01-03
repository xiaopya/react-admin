import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  splitMenus: false,
  title: 'xīngkōng',
  pwa: false,
  headerHeight: 48,
  logo: 'https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif',
  iconfontUrl: '',
};

export default Settings;
