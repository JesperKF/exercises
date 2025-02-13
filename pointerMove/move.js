document.addEventListener("mousemove", (event) => {
    const lightness = (event.clientX / window.innerWidth) * 100;
    const saturation = (event.clientY / window.innerHeight) * 100;

    document.body.style.setProperty("--lightness", `${lightness}%`);
    document.body.style.setProperty("--saturation", `${saturation}%`);
});

/* "mousemove"
window.innerWidth
style.setProperty
clientX
// procentregning: delen/detHele * 100 */