import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  return <h3>seu Id: {id}</h3>;
}
