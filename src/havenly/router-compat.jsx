import {
  Link as RLink,
  NavLink as RNavLink,
  useNavigate as useRNavigate,
  useParams as useRParams,
  useSearchParams as useRSearchParams,
} from "react-router-dom";

export const Link = RLink;
export const NavLink = RNavLink;
export const useParams = useRParams;
export const useSearchParams = useRSearchParams;

export function useNavigate() {
  const navigate = useRNavigate();
  return (to, options) => navigate(to, options);
}
