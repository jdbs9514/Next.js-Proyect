import Users from "@/components/Users";

const fetchData = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  return data.data;
}

const HomePage = async () => {
  const users = await fetchData();
  return (
   <Users users={users}/>
  )
}

export default HomePage