import { styled } from "@mui/material/styles"
import Grid from '@mui/material/Grid'
export const Decoration = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))