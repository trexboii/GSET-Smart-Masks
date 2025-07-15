const BACKEND_URL = "https://smart-mask-production.up.railway.app"
export async function sendCO2(co2: number) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/co2`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ co2 }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error sending CO2:", err);
  }
}
export async function getLatestCo2() :  Promise <number | null> {
  try {
    const res = await fetch (`${BACKEND_URL}/api/co2/latest`)
    const data = await res.json()
    return data.co2 || null;
  }
  catch (err) {
    console.error("Error fetching latest CO2:", err);
    return null;
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
    const res = await fetch(`${BACKEND_URL}/datapoints`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latitude, longitude, vocIndex, pm25, temperature, humidity }),
    });
    return await res.json();
  } catch (err) {
    console.error("Error sending VOC data:", err);
  }
}
