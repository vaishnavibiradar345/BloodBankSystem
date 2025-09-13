const apiUrl = import.meta.env.VITE_API_URL;

// Example: get all donors
export async function fetchDonors() {
  const res = await fetch(`${apiUrl}/donors`);
  return res.json();
}

// Example: add a donor
export async function addDonor(donor) {
  const res = await fetch(`${apiUrl}/donors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(donor),
  });
  return res.json();
}

// Example: fetch requests
export async function fetchRequests() {
  const res = await fetch(`${apiUrl}/requests`);
  return res.json();
}
