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
    src: './fonts/Butler_Light.otf',
    weight: '300',
    variable: '--fonts-butler'
})

export const fonts = {
    poppins, newsReader, butler
}