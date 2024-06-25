function toggleLight() {
    var lightbulb = document.getElementById("baseoffimg");
    if (lightbulb.src.includes('CrAWvYITl')) {
        lightbulb.src = "/images/lightoff.jpeg";
    } else {
        lightbulb.src = '/images/lighton.png';
    }
}