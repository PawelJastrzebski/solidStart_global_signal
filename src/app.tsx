import { MetaProvider, Title } from "@solidjs/meta";
import { Router, useNavigate } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";


export default function App() {
  return (
    <Router
      root={props => {
        const navigate = useNavigate()

        return (
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <a onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              navigate("/")
            }} href="/">Index</a>
            <a onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              navigate("/about")
            }} href="/about">About</a>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )
      }}
    >
      <FileRoutes />
    </Router>
  );
}
