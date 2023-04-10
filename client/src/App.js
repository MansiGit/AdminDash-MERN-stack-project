import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "scenes/dashboard"
import Layout from "scenes/layout"
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element = {<Layout/>}>
              <Route path = "/" element ={<Navigate to ="/dashboard" replace />} />
              <Route path = "/dashboard" element ={<Dashboard />}/>
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />

            </Route>
          </Routes>
          <CssBaseline />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;