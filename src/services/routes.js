export async function getTeams() {
  try {
    const res = await fetch('https://www.balldontlie.io/api/v1/teams');
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getTeam(id) {
  // try { 
  //   const res = await fetch(`https://www.balldontlie.io/api/v1/teams/${id}`);
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
  return fetch(`https://www.balldontlie.io/api/v1/teams/${id}`)
    .then(res => {
      const data = res.json()
      return data;
    })
    .catch(error => console.log(error));
}
