export async function sendCO2(co2: number) {
  try {
    const res = await fetch("http://10.75.155.67:3000/api/co2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ co2 }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error sending CO2:", err);
  }
}

export async function sendVOCData(
  latitude: number,
  longitude: number,
  vocIndex: number,
  pm25: number,
  temperature: number,
  humidity: number,
) {
  try {
    const res = await fetch("http://10.75.155.67:3000/api/datapoints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latitude, longitude, vocIndex, pm25, temperature, humidity }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error sending VOC data:", err);
  }
}
