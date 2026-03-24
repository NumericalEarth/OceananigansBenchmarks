window.BENCHMARK_DATA = {
  "lastUpdate": 1774321183825,
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
      },
      {
        "commit": {
          "author": {
            "email": "765740+giordano@users.noreply.github.com",
            "name": "Mosè Giordano",
            "username": "giordano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04fd2ed7572f6ad5f7e6f475add66ce2bcc1550a",
          "message": "Small improvements to the benchmarking pipeline (#5421)\n\n* [CI] Always run the publish benchmarks workflow\n\n* Remove ClimaSeaIce from benchmarking environment\n\nIt's completely unused\n\n* [CI] Use latest `actions/checkout` version",
          "timestamp": "2026-03-22T16:44:47Z",
          "tree_id": "5260da48613a5ebd7a438a2a947ca76e556a6096",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/04fd2ed7572f6ad5f7e6f475add66ce2bcc1550a"
        },
        "date": 1774215162229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.0328426548,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08987963709,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35396643529000005,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06262079035,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049359601030000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08987170007999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11807342866000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29863121049,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04853061285,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07609708064000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12925448688,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10070502605,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09731363438000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09599079162,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08669810406,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08949075073,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08991884328,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09986326699999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/5 tracers",
            "value": 0.1202421949,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Profiling/tripolar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE",
            "value": 0.353636099,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 707.907388,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 685.965994,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 681.314282,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 480.134778,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 474.536027,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 472.585864,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 299.535638,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 216.814417,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 121.083574,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 91.427317,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Profiling/tripolar_zstar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE+GM+Biharmonic",
            "value": 1.9983691816,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 7944.002242,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6616.484763,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6609.858465,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2900.98268,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2847.786479,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 741.791372,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_tapered_R___",
            "value": 705.972899,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 328.729227,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 240.55347,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 142.885742,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Profiling/tripolar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE",
            "value": 0.353636099,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 707.907388,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 685.965994,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 681.314282,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 480.134778,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 474.536027,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 472.585864,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 299.535638,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 216.814417,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 121.083574,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 91.427317,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Profiling/tripolar_zstar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE+GM+Biharmonic",
            "value": 1.9983691816,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 7944.002242,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6616.484763,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6609.858465,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2900.98268,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2847.786479,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 741.791372,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_tapered_R___",
            "value": 705.972899,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 328.729227,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 240.55347,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 142.885742,
            "unit": "ms (total GPU time)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wagner.greg@gmail.com",
            "name": "Gregory L. Wagner",
            "username": "glwagner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3dc01d444c7083c1d617642166340c00cd249fe",
          "message": "Extend TabulatedFunction to support 4D and 5D interpolation (#5417)\n\n* Extend TabulatedFunction to support 4D quadrilinear interpolation\n\nAdd support for 4-dimensional lookup tables with quadrilinear interpolation,\nfollowing the same patterns as the existing 1D/2D/3D implementations.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Extend TabulatedFunction to support 5D quintilinear interpolation\n\nSame mechanical pattern as 4D: adds 5D kernel, builder, evaluation method,\n32-term _interpolate, TabulatedFunction5D alias, and comprehensive tests.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Ignore legacy_benchmark linkcheck (directory removed in #5412)\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Apply suggestion from @glwagner\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-03-23T15:59:31-06:00",
          "tree_id": "a30659ab00cdc19d27a93eb9d2c36dd6729ca8fd",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e3dc01d444c7083c1d617642166340c00cd249fe"
        },
        "date": 1774321183617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.031532658910000004,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08984538513000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35163948436,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06491744668,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049168393469999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08959666444,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11797034095,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29969186256,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04804346985999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07609690101,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12885226862,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10046012181,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09714412268,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09589896522000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0865069118,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08912869713999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08969210221999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.0997129627,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/5 tracers",
            "value": 0.11969701357,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Profiling/tripolar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE",
            "value": 0.3550240515,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 707.881132,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 685.955184,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 684.207068,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 481.556166,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 475.500216,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 473.118886,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 298.978643,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 216.387518,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 121.017593,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 91.945969,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Profiling/tripolar_zstar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE+GM+Biharmonic",
            "value": 1.9936546892,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 7943.800523,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6624.987277,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6583.7301,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2893.990485,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2854.785905,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 741.839314,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_tapered_R___",
            "value": 706.240485,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 328.890199,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 240.817558,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 142.833142,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Profiling/tripolar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE",
            "value": 0.3550240515,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 707.881132,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 685.955184,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 684.207068,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 481.556166,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 475.500216,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 473.118886,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 298.978643,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 216.387518,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 121.017593,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 91.945969,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Profiling/tripolar_zstar 720x360x50 F64/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7 CATKE+GM+Biharmonic",
            "value": 1.9936546892,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 7943.800523,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6624.987277,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 6583.7301,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2893.990485,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2854.785905,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 741.839314,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_tapered_R___",
            "value": 706.240485,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 328.890199,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 240.817558,
            "unit": "ms (total GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_zstar_720x360x50_F64_WENOVectorInvariantDefault_WENO7_CATKE+GM+Biharmonic_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 142.833142,
            "unit": "ms (total GPU time)"
          }
        ]
      }
    ]
  }
}