import { useRouter } from "next/router";

export default function product() {
  const router = useRouter();
  const { id } = router.query;

  return <div>product {id} 페이지</div>;
}
