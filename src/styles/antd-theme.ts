import {ThemeConfig} from 'antd/es/config-provider/context';

const colors = {
    primary: '#191919',
    secondary: '#3B3D49',
    border: '#BABABA',

    // colors MP 2.0
    'bg-input': '#E0E3ED',
};

const AntdThemeConfig: ThemeConfig = {
    token: {
        colorText: colors.primary,
        borderRadius: 0,
        fontFamily: 'var(--font-primary)',
        colorBorder: colors.border,
        colorTextHeading: 'inherit',
        colorTextLabel: colors.secondary,
        colorLink: 'inherit',
        colorLinkHover: 'inherit',
        colorLinkActive: 'inherit',
        fontSize: 16,
        fontSizeSM: 14,
        fontSizeLG: 18,
    },
    components: {
        Select: {
            borderRadius: 10,
            colorBgContainer: '#15021F',
            colorText: '#fff',
            colorBgElevated: '#2D0044',
            colorIcon: '#fff',
        },
    },
};

export default AntdThemeConfig;
