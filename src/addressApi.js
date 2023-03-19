export const getInitialInfo = async () => {
  const response = await fetch('https://api64.ipify.org/?format=json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify()
  });

  const data = await response.json();
  // getIpAddressInfo(data.ip);
  return data.ip;
}

export const getIpAddressInfo = async (info) => {
  const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_pdfW24FBEWTWNqeCv7F4rtf1TNKbs&ipAddress=${info}`);
  const data = await response.json();
  return data;
}
