const randomObj = (obj) => {
    let result;
    let count = 0;
    for (let prop in obj)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}

const randomMaterialColor = () => {
    const colors = {
        "red": ["#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c"],
        "pink": ["#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f"],
        "purple": ["#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
        "deepPurple": ["#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"],
        "indigo": ["#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e"],
        "blue": ["#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1"],
        "cyan": ["#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064"],
        "green": ["#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
        "lightGreen": ["#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e"],
        "lime": ["#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717"],
        "orange": ["#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
        "deepOrange": ["#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c"],
        "brown": ["#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723"],
        "grey": ["#9e9e9e", "#757575", "#616161", "#424242", "#212121"],
        "blueGrey": ["#607d8b", "#546e7a", "#455a64", "#37474f", "#263238"],
        "black": ["#000000"]
    }
    const colorList = colors[randomObj(colors)];
    const newColor = randomObj(colorList);
    return newColor;
}

const avatarGen = ({ name, backgroundColor, fontColor, size, rounded=true }) => {
    try {
        const canvas = document.createElement('canvas');
        canvas.style.display = 'none';
        canvas.width = size || '200';
        canvas.height = size || '200';
        if (rounded) {
            canvas.style.borderRadius = "50%";
        }

        document.body.appendChild(canvas);
        
        const context = canvas.getContext('2d');
        const bg = backgroundColor || randomMaterialColor();
        context.fillStyle = bg;
        context.fillRect(0, 0, canvas.width, canvas.height);

        const fontSize = size - size / 3 || 200;
        context.font = `${fontSize}px Arial`;
        context.fillStyle = fontColor || "#FFFFFF";

        const [first = '', last = ''] = name.split(" ");
        const text = `${(first[0] || "S")}${(last[0] || "")}`.toUpperCase();

		const textMetrics = context.measureText(text);
        const textWidth = textMetrics.width;
		const textHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;

        context.fillText(text, (canvas.width / 2) - (textWidth / 2), (size || 200) / 2 + ((size || 200) / 2) - (textHeight / 2));
        const data = canvas.toDataURL();
        document.body.removeChild(canvas);
        return data;
    } catch (err) {
        console.error(err, "AVATAR GEN");
    }
}


export default avatarGen;
