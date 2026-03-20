window.BENCHMARK_DATA = {
  "lastUpdate": 1774006094449,
  "repoUrl": "https://github.com/CliMA/Oceananigans.jl",
  "entries": {
    "Oceananigans.jl Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "danielkytezable@gmail.com",
            "name": "dkytezab",
            "username": "dkytezab"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4da9e657e0667d5425d3f496ee484e7f9bd8022d",
          "message": "Update fill_halo_regions.jl (#5415)\n\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>",
          "timestamp": "2026-03-19T23:39:37-07:00",
          "tree_id": "cf9ec3742913191330144092145d03296899ef3e",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/4da9e657e0667d5425d3f496ee484e7f9bd8022d"
        },
        "date": 1774006094030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03404856482,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09011743378,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35380088842,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06767667366999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04927359169,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0900495046,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11870242895000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.30004856238,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04825268817,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07630546175,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12912129539,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10085282805000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09726596857,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09591905446,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08670635079,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08945461179,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08985196727,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09993947427,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/5 tracers",
            "value": 0.12000862314,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Profiling/tripolar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE",
            "value": 0.3534003316,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 706.613127,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 685.850895,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 681.223142,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 479.671683,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 474.393484,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 472.223673,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 299.045609,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 216.315269,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 121.187297,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 91.866361,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Profiling/tripolar_zstar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE+GM+Biharmonic",
            "value": 1.9998886669,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 7947.072105,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6631.080375,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6615.204363,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2903.582416,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2848.071959,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 740.619303,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_tapered_R___",
            "value": 706.528292,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 328.786835,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 240.384937,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 143.764393,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Profiling/tripolar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE",
            "value": 0.3534003316,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 706.613127,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 685.850895,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 681.223142,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 479.671683,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 474.393484,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 472.223673,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 299.045609,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 216.315269,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 121.187297,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 91.866361,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Profiling/tripolar_zstar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE+GM+Biharmonic",
            "value": 1.9998886669,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 7947.072105,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6631.080375,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6615.204363,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2903.582416,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2848.071959,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 740.619303,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_tapered_R___",
            "value": 706.528292,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 328.786835,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 240.384937,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 143.764393,
            "unit": "ms (total GPU time)"
          }
        ]
      }
    ]
  }
}