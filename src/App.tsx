
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePageTemplate from "./components/ServicePageTemplate";

import FencingPage from "./pages/FencingPage";
import WarehousesPage from "./pages/WarehousesPage";
import LandscapingPage from "./pages/LandscapingPage";
import StructuralCanopiesPage from "./pages/StructuralCanopiesPage";

import SchoolCanopiesPage from "./pages/SchoolCanopiesPage";
import LaserCutCanopiesPage from "./pages/LaserCutCanopiesPage";
import ArchCanopiesPage from "./pages/ArchCanopiesPage";
import GarageCanopiesPage from "./pages/GarageCanopiesPage";
import RoofInsulationPage from "./pages/RoofInsulationPage";
import WaterThermalInsulationPage from "./pages/WaterThermalInsulationPage";
import CladdingCanopiesPage from "./pages/CladdingCanopiesPage";
import PyramidalCanopiesPage from "./pages/PyramidalCanopiesPage";

import { servicesById } from "./config/services";

const basename = "/al-benaa-alameg/";

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route
          path="/canopies"
          element={
            <ServicePageTemplate service={servicesById.canopies} />
          }
        />

        <Route path="/fencing" element={<FencingPage />} />

        <Route path="/warehouses" element={<WarehousesPage />} />

        <Route
          path="/palace-canopies"
          element={
            <ServicePageTemplate
              service={servicesById.palaceCanopies}
            />
          }
        />

        <Route
          path="/pool-canopies"
          element={
            <ServicePageTemplate
              service={servicesById.poolCanopies}
            />
          }
        />

        <Route
          path="/structural-canopies"
          element={<StructuralCanopiesPage />}
        />

        <Route
          path="/pergolas"
          element={
            <ServicePageTemplate service={servicesById.pergolas} />
          }
        />

        <Route
          path="/majalis"
          element={
            <ServicePageTemplate service={servicesById.majalis} />
          }
        />

        <Route
          path="/roofing-tiles"
          element={
            <ServicePageTemplate
              service={servicesById.roofingTiles}
            />
          }
        />

        <Route
          path="/fabric-houses"
          element={
            <ServicePageTemplate
              service={servicesById.fabricHouses}
            />
          }
        />

        <Route
          path="/sandwich-warehouses"
          element={
            <ServicePageTemplate
              service={servicesById.sandwichWarehouses}
            />
          }
        />

        <Route
          path="/building-fencing"
          element={
            <ServicePageTemplate
              service={servicesById.buildingFencing}
            />
          }
        />

        <Route
          path="/railings"
          element={
            <ServicePageTemplate service={servicesById.railings} />
          }
        />

        <Route
          path="/aluminum"
          element={
            <ServicePageTemplate service={servicesById.aluminum} />
          }
        />

        <Route
          path="/colored-wood"
          element={
            <ServicePageTemplate
              service={servicesById.coloredWood}
            />
          }
        />

        <Route
          path="/painting"
          element={
            <ServicePageTemplate service={servicesById.painting} />
          }
        />

        <Route
          path="/waterproofing"
          element={
            <ServicePageTemplate
              service={servicesById.waterproofing}
            />
          }
        />

        <Route
          path="/thermal-insulation"
          element={
            <ServicePageTemplate
              service={servicesById.thermalInsulation}
            />
          }
        />

        <Route
          path="/landscaping"
          element={<LandscapingPage />}
        />

        {/* الصفحات القديمة الموجودة في المشروع */}
        <Route
          path="/school-canopies"
          element={<SchoolCanopiesPage />}
        />

        <Route
          path="/laser-cut-canopies"
          element={<LaserCutCanopiesPage />}
        />

        <Route
          path="/arch-canopies"
          element={<ArchCanopiesPage />}
        />

        <Route
          path="/garage-canopies"
          element={<GarageCanopiesPage />}
        />

        <Route
          path="/roof-insulation"
          element={<RoofInsulationPage />}
        />

        <Route
          path="/water-thermal-insulation"
          element={<WaterThermalInsulationPage />}
        />

        <Route
          path="/cladding-canopies"
          element={<CladdingCanopiesPage />}
        />

        <Route
          path="/pyramidal-canopies"
          element={<PyramidalCanopiesPage />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
