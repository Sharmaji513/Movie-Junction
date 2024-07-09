import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmRiMTZmNzNiNzA4Y2VhNzk4ZWY0ZTAxOTA4MTgxZSIsIm5iZiI6MTcyMDQ5OTE5OS44NDkwNCwic3ViIjoiNjU5NGU2ZTdkN2E3MGExMWM3NjkxN2U4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5IEfb-lSQ6_Jlygx1OqZ_A1EvkI3Qi242dQw5Bpxlb8'
     
  }
});


export default instance;