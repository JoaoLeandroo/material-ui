import Slider from '@mui/material/Slider'

export default function SlideUsage() {
    return(
        <Slider
        aria-label="Restricted values"
        defaultValue={100}
        // step={null}
        valueLabelDisplay="auto"
        />
    )
}