import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/productApi";

export default function useProduct(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  });
}
