document.addEventListener('DOMContentLoaded', function () {
    const angleInput = document.getElementById('angleInput');
    const angleSlider = document.getElementById('angleSlider');
    const angleText = document.getElementById('angleText');
    const pieSlice = document.getElementById('pieSlice');
    const commonAngleRadios = document.querySelectorAll('input[name="commonAngle"]');

    // Initialize values
    let angle = 0;

    const updatePieChart = (angle) => {
        const radius = 50;
        const x = radius + radius * Math.cos((Math.PI * (angle - 90)) / 180);
        const y = radius + radius * Math.sin((Math.PI * (angle - 90)) / 180);
        const largeArcFlag = angle > 180 ? 1 : 0;
        pieSlice.setAttribute('d', `M50,50 L50,0 A50,50 0 ${largeArcFlag},1 ${x},${y} Z`);
        angleText.textContent = `${angle}°`;
    };

    const syncComponents = (newAngle) => {
        angle = newAngle;
        angleInput.value = angle;
        angleSlider.value = angle - 180;
        updatePieChart(angle);
        updateRadioButtons(angle);
    };

    const updateRadioButtons = (angle) => {
        commonAngleRadios.forEach(radio => {
            radio.checked = parseInt(radio.value, 10) === angle;
        });
    };

    // Handle text input change
    angleInput.addEventListener('input', (event) => {
        let value = parseInt(event.target.value, 10);
        if (isNaN(value)) value = 0;
        if (value < 0) value = 0;
        if (value > 360) value = 360;
        syncComponents(value);
    });

    // Handle slider change
    angleSlider.addEventListener('input', (event) => {
        const sliderValue = parseInt(event.target.value, 10);
        const adjustedValue = sliderValue + 180;
        syncComponents(adjustedValue);
    });

    // Handle radio button change
    commonAngleRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            if (event.target.checked) {
                syncComponents(parseInt(event.target.value, 10));
            }
        });
    });

    // Initial update
    syncComponents(angle);
});
