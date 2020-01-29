import styled from 'styled-components'
import { variant, space, layout, color, compose } from 'styled-system'

const Button = styled.button(
    {
      appearance: 'none',
      fontFamily: 'inherit'
    },
    compose(
        space,
        layout,
        color
    ),
    variant({
        variants: {
            primary: {
            color: 'white',
            bg: 'primary',
            },
            secondary: {
            color: 'white',
            bg: 'secondary',
            },
        }
    })
)


export default Button