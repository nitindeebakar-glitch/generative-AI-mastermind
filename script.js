function generateQuestions() {
    let topic = document.getElementById("topic").value;

    let output = `
1. What is ${topic}?
2. Explain the applications of ${topic}.
3. Advantages of ${topic}.
4. Disadvantages of ${topic}.
5. Future scope of ${topic}.
    `;

    document.getElementById("output").innerText = output;
}

function generateNotes() {
    let topic = document.getElementById("topic").value;

    let output = `
${topic} is an important concept in modern technology.
It is widely used in today's digital world.
It helps in automation and smart decision making.
It has applications in education, healthcare and business.
    `;

    document.getElementById("output").innerText = output;
}