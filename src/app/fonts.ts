import localFont from 'next/font/local'

const poppins = localFont({
    src: './fonts/Poppins-Bold.ttf',
    weight: '700',
    variable: '--fonts-poppins'
})

const newsReader = localFont({
    src: './fonts/Newsreader-VariableFont_opsz,wght.ttf',
    weight: '300',
    variable: '--fonts-newsReader'
})

const butler = localFont({
    src: [
        {
            path: './fonts/Butler_Light.otf',
            weight: '300',
        },
        {
            path: './fonts/Butler_Medium.otf',
            weight: '500',
        }
    ]
})

export const fonts = {
    poppins, newsReader, butler
}