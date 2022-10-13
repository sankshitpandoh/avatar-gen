const randomObj = (obj) => {
    let result;
    let count = 0;
    for (let prop in obj)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}

const randomMaterialColor = () => {
    // colors from https://github.com/egoist/color-lib/blob/master/color.json
    let colors = {
        "red": {
            "500": "#f44336",
            "600": "#e53935",
            "700": "#d32f2f",
            "800": "#c62828",
            "900": "#b71c1c",
            "hex": "#f44336",
            "a100": "#ff8a80",
            "a200": "#ff5252",
            "a400": "#ff1744",
            "a700": "#d50000"
        },
        "pink": {
            "500": "#e91e63",
            "600": "#d81b60",
            "700": "#c2185b",
            "800": "#ad1457",
            "900": "#880e4f",
            "hex": "#e91e63",
            "a100": "#ff80ab",
            "a200": "#ff4081",
            "a400": "#f50057",
            "a700": "#c51162"
        },
        "purple": {
            "500": "#9c27b0",
            "600": "#8e24aa",
            "700": "#7b1fa2",
            "800": "#6a1b9a",
            "900": "#4a148c",
            "hex": "#9c27b0",
            "a100": "#ea80fc",
            "a200": "#e040fb",
            "a400": "#d500f9",
            "a700": "#aa00ff"
        },
        "deepPurple": {
            "500": "#673ab7",
            "600": "#5e35b1",
            "700": "#512da8",
            "800": "#4527a0",
            "900": "#311b92",
            "hex": "#673ab7",
            "a100": "#b388ff",
            "a200": "#7c4dff",
            "a400": "#651fff",
            "a700": "#6200ea"
        },
        "indigo": {
            "500": "#3f51b5",
            "600": "#3949ab",
            "700": "#303f9f",
            "800": "#283593",
            "900": "#1a237e",
            "hex": "#3f51b5",
            "a100": "#8c9eff",
            "a200": "#536dfe",
            "a400": "#3d5afe",
            "a700": "#304ffe"
        },
        "blue": {
            "500": "#2196f3",
            "600": "#1e88e5",
            "700": "#1976d2",
            "800": "#1565c0",
            "900": "#0d47a1",
            "hex": "#2196f3",
            "a100": "#82b1ff",
            "a200": "#448aff",
            "a400": "#2979ff",
            "a700": "#2962ff"
        },
        "cyan": {
            "500": "#00bcd4",
            "600": "#00acc1",
            "700": "#0097a7",
            "800": "#00838f",
            "900": "#006064",
            "hex": "#00bcd4",
            "a100": "#84ffff",
            "a200": "#18ffff",
            "a400": "#00e5ff",
            "a700": "#00b8d4"
        },
        "green": {
            "500": "#4caf50",
            "600": "#43a047",
            "700": "#388e3c",
            "800": "#2e7d32",
            "900": "#1b5e20",
            "hex": "#4caf50",
            "a100": "#b9f6ca",
            "a200": "#69f0ae",
            "a400": "#00e676",
            "a700": "#00c853"
        },
        "lightGreen": {
            "500": "#8bc34a",
            "600": "#7cb342",
            "700": "#689f38",
            "800": "#558b2f",
            "900": "#33691e",
            "hex": "#8bc34a",
            "a100": "#ccff90",
            "a200": "#b2ff59",
            "a400": "#76ff03",
            "a700": "#64dd17"
        },
        "lime": {
            "500": "#cddc39",
            "600": "#c0ca33",
            "700": "#afb42b",
            "800": "#9e9d24",
            "900": "#827717",
            "hex": "#cddc39",
            "a100": "#f4ff81",
            "a200": "#eeff41",
            "a400": "#c6ff00",
            "a700": "#aeea00"
        },
        "orange": {
            "500": "#ff9800",
            "600": "#fb8c00",
            "700": "#f57c00",
            "800": "#ef6c00",
            "900": "#e65100",
            "hex": "#ff9800",
            "a100": "#ffd180",
            "a200": "#ffab40",
            "a400": "#ff9100",
            "a700": "#ff6d00"
        },
        "deepOrange": {
            "500": "#ff5722",
            "600": "#f4511e",
            "700": "#e64a19",
            "800": "#d84315",
            "900": "#bf360c",
            "hex": "#ff5722",
            "a100": "#ff9e80",
            "a200": "#ff6e40",
            "a400": "#ff3d00",
            "a700": "#dd2c00"
        },
        "brown": {
            "500": "#795548",
            "600": "#6d4c41",
            "700": "#5d4037",
            "800": "#4e342e",
            "900": "#3e2723",
            "hex": "#795548"
        },
        "grey": {
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
            "hex": "#9e9e9e"
        },
        "blueGrey": {
            "500": "#607d8b",
            "600": "#546e7a",
            "700": "#455a64",
            "800": "#37474f",
            "900": "#263238",
            "hex": "#607d8b"
        },
        "black": {
            "hex": "#000000"
        }
    }
    // pick random 
    let colorList = colors[randomObj(colors)];
    let newColorKey = randomObj(colorList);
    let newColor = colorList[newColorKey];
    return newColor;
}

const avatarGen = ({ name, backgroundColor, fontColor, size, rounded=false }) => {
    try {
        let canvas = document.createElement('canvas');
        canvas.style.display = 'none';
        canvas.width = size || '200';
        canvas.height = size || '200';
        if (rounded) {
            canvas.style.border_radius = "50%"
        }
        document.body.appendChild(canvas);
        let context = canvas.getContext('2d');
        context.fillStyle = backgroundColor || randomMaterialColor();
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = `${(size || 200) / 2}px Arial`;
        context.fillStyle = fontColor || "#FFFFFF";
        let [first, last] = name.split(" ");
        let text = (((first || "")[0]) || "S") + (((last || "")[0]) || "");
        text = text.toUpperCase();
        let textWidth = context.measureText(text).width;
        context.fillText(text, (canvas.width / 2) - (textWidth / 2), (size || 200) / 2 + ((size || 200) / 8) + 8);
        let data = canvas.toDataURL();
        document.body.removeChild(canvas);
        return data;
    } catch (err) {
        console.log(err, "AVATAR GEN");
    }
}


export default avatarGen;
