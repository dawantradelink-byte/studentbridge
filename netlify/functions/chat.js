export async function handler(event) {

const apiKey = process.env.GEMINI_API_KEY;

const response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey,
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
contents: [{
parts: [{ text: "Hello AI" }]
}]
})
}
);

const data = await response.json();

return {
statusCode: 200,
body: JSON.stringify(data)
};

}
