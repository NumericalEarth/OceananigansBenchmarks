window.BENCHMARK_DATA = {
  "lastUpdate": 1777352347369,
  "repoUrl": "https://github.com/CliMA/Oceananigans.jl",
  "entries": {
    "Oceananigans.jl Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b91775407a52bc73a8e9ac93f07b785cdc336fd3",
          "message": "Fix publish-benchmarks pipeline token permissions (#5448)",
          "timestamp": "2026-03-30T07:40:09Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/b91775407a52bc73a8e9ac93f07b785cdc336fd3"
        },
        "date": 1774862055768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01204,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.956137,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.782202,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.557456,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.528305,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.520945,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.61807,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270521,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338686,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525789,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03031406078,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35176838755,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06892611466,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04940980415,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11842971006999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29967811356999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04818585705,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07606734718000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.1291753834,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060960741000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09737208024999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09566392153,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08652563082,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08864690713,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09966160125,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09024320928,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "16482f541dab40f16245a430c42df0df6b0ced85",
          "message": "Bump codecov/codecov-action from 5 to 6 (#5455)\n\nBumps [codecov/codecov-action](https://github.com/codecov/codecov-action) from 5 to 6.\n- [Release notes](https://github.com/codecov/codecov-action/releases)\n- [Changelog](https://github.com/codecov/codecov-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/codecov/codecov-action/compare/v5...v6)\n\n---\nupdated-dependencies:\n- dependency-name: codecov/codecov-action\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>",
          "timestamp": "2026-03-30T07:41:41Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/16482f541dab40f16245a430c42df0df6b0ced85"
        },
        "date": 1774873304759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012648,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.953208,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.768105,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.554576,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.525968,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.515984,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.61519,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269047,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339357,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526461,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02863122839,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35173997018000003,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06359759834,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04931854891,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11833966018,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.30056910716,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04816015365,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07599710327999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12916011952,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10077292009000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09725464227,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09563176298,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08659765502000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08868584672,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09977110524,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09046669029,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e583ed7856fd82e78031610bea6a2844333724bb",
          "message": "Replace PR benchmark polling with Buildkite dispatch (#5457)\n\n* Replace PR benchmark polling with Buildkite dispatch notification\n\nThe GHA publish-benchmarks workflow previously polled Buildkite for up to\n~9.5 hours waiting for PR benchmark builds to complete, risking the GHA\n6-hour hard limit. Now Buildkite notifies GHA via repository_dispatch for\nall branches (not just main), eliminating the polling entirely.\n\n- Buildkite: remove branch gate on notify step, send branch + PR number\n- GHA: remove pull_request trigger and polling loop\n- Main: pushes to external repo + benchmark-action (unchanged behavior)\n- PRs: posts comparison comment via gh CLI using github.token\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Only post benchmark comparison in PR comments\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix benchmark-action using wrong commit SHA for repository_dispatch\n\nFor repository_dispatch events, github.sha resolves to HEAD of the\ndefault branch at dispatch time, not the actual benchmarked commit.\nWhen two commits land close together, the second commit's SHA gets\nused for both entries in data.js, causing the first commit to be\nmissing from the benchmark charts.\n\nPass the actual commit from client_payload via the ref input so\nbenchmark-action tags data.js entries with the correct commit.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Enable comments on benchmark alerts\n\n* Add descriptive run-name to publish-benchmarks workflow\n\nReplace the default \"benchmarks_complete\" display title with useful\ncontext: branch and commit SHA for main builds, branch and PR number\nfor pull request builds.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Include NSYS kernel comparison in PR benchmark comments\n\nThe NSYS kernel profiling table was only in the job summary but not\nin the PR comment. Save it to a separate file during the summary step\nand append it to the PR comment.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-30T15:34:27Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e583ed7856fd82e78031610bea6a2844333724bb"
        },
        "date": 1774892056755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.011653,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.953413,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.780823,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.557551,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.528464,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.520144,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6178295,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270583,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.34147,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525917,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03250673787,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35161204709000005,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06293472507,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04955679056,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11830130539,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29982664258,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048189193660000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07615340712,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12874226552,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10058491707,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09724954102,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09561116672,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08644612195000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08862457919000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09963550853999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0901942431,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tomás Chor",
            "username": "tomchor",
            "email": "tomaschor@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c8bfcc6fce74f0cba308401d8490d0215986a6a1",
          "message": "Add a hydrostatic barotropic soliton case validation for hydrostatic open boundaries (#5387)\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\nCo-authored-by: tomchor <13205162+tomchor@users.noreply.github.com>\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>",
          "timestamp": "2026-03-31T01:52:18Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/c8bfcc6fce74f0cba308401d8490d0215986a6a1"
        },
        "date": 1774927611994,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012903,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9558315,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7851125,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.55176,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522672,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.512913,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.615574,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269337,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338142,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526878,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.0329064457,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35159978279,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06546936735,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04941995672,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11837138537,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29967749573999997,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04838050309,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07599333103,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12942801787,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10070344413999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738793204,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09564189963,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08652034911999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0888010727,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09975679912,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09043109321,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tomás Chor",
            "username": "tomchor",
            "email": "tomaschor@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5acb0fa4939782d116778eec3ace534583dfc154",
          "message": "Remove duplicate turbulence closure test from GitHub Actions (#5460)\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-31T10:53:04Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/5acb0fa4939782d116778eec3ace534583dfc154"
        },
        "date": 1774960148497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01268,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.952536,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.786665,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.563952,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.533905,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.525776,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.615462,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269176,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338749,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526717,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03211362198,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35161816211999997,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.07220372699000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04928934797,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11817940930000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29970951516,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04817885473,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07609447741,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12883372876,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10059945585999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738020865,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09579065112,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647132399,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08865079053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09994079148000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09029461517,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "083554c3e5c0c109396d8ef24091b79d328789a5",
          "message": "[CI] Run sharding tests under earlyoom (#5453)\n\n* [CI] Run sharding tests under earlyoom\n\n* Do not override `XLA_FLAGS` when running the tests\n\n* [CI] Upload XLA dump as artifact\n\n* [CI] Also upload MLIR modules dumped by Reactant\n\n* [CI] Create `TMPDIR`",
          "timestamp": "2026-03-31T13:13:36Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/083554c3e5c0c109396d8ef24091b79d328789a5"
        },
        "date": 1774970111110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01204,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.952074,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7794015,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.556496,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.529778,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522001,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6183105,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270872,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340318,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525982,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03269888169,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.351809355,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06364180264,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04927214394,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11862391743,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29980709465,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04817612028,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07610915356999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12886416483,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10066228188,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09754725631,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09595524739,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647837031,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08867298799000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09969905926999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09026271434,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jackdfranklin",
            "username": "jackdfranklin",
            "email": "144433437+jackdfranklin@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a2f69db950bf20aeed26c8eec20d07da400c5316",
          "message": "Automated dependency checking (#5432)\n\n* Add automatic checking for Julia dependency updates\n\n* Add automatic dependency checks\nChecks for minimum version compatability, and tries to resolve all\nprojects (./, test, benchmarking)\n\n* Change Reactant core version\n\n* Fix mode name\n\n* Remove Cache from dependency check\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Add check for dependency resolution\n\n* Fix typo in filename\n\n* Remove cache from resolve check\n\n* Combine commands into one run\n\n* List project files in downgrade action\nThis should reduce the number of individual CI jobs\n\n* Add General registry\n\n* Remove CompatHelper CI\n\n* Apply suggestions from code review\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Modify dependabot.yml\nGroup dependencies together and ignore Oceananigans\n\n* Change working directory\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n---------\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-03-31T16:53:54Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/a2f69db950bf20aeed26c8eec20d07da400c5316"
        },
        "date": 1774991316063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012388,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9544195,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.785077,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.556814,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.527758,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.518222,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.615557,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269175,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339486,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.527036,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03299234826,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35177457113000005,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06604397429,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04936768707,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11840196614,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29980739898,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048145966619999994,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07598942422999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12941860307,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10071841504,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738560591,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09561132116,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08660352199,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08877773638000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09986214337,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b706e8f057b9f507eb471f44b8135f90a43e8f37",
          "message": "Update number of ambiguities (#5462)",
          "timestamp": "2026-03-31T17:03:33Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/b706e8f057b9f507eb471f44b8135f90a43e8f37"
        },
        "date": 1774996955519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012872,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.942664,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.773385,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.564976,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.53704,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.529073,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.61807,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270905,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.34003,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525693,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03318315909,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35156608695999997,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06335616603,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049345585239999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11834928675,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29965674297,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04832557279000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.0760063186,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12940447443,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10068663881,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09736977665999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09565993414,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647094794999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08867518413000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09980501828999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0917482934,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "17fdb6620b5aab71968199f0b19c222f885222ce",
          "message": "Clear ambiguities in `conditional_length` (#5456)\n\n* clear ambiguities\n\n* update total ambiguities\n\n---------\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-04-01T06:33:11Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/17fdb6620b5aab71968199f0b19c222f885222ce"
        },
        "date": 1775031084352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012585,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.959018,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.781115,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.56261,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.534674,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526131,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.615767,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269144,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33971,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.527101,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03535331308,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35188018731,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.07239845174,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04941951762999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11834249,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29970490534,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04818904777,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07607752596,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12892254880999998,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10062409664000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09762316017,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09567402989,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08661090548,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08865784518,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.10113065605999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e369fb3bb111b9aeaf794dca092b42d83c64b815",
          "message": "Remove dependency on `CUDA_Runtime_jll` in `test/` environment (#5466)",
          "timestamp": "2026-04-01T06:48:38Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e369fb3bb111b9aeaf794dca092b42d83c64b815"
        },
        "date": 1775036635889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012071,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.953143,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.78548,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.560912,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.53064,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.52072,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6154145,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269176,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339422,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526364,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.029120715590000002,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35178579819,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06916613328,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04974306476,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11841226578000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29960356948,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04819069538,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07608342473,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12883674341,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10067042219,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738310344000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09564038723,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08651638351,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08871245113000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09962768071,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3d31393bed99a1d9af5adafda91695ea23408a87",
          "message": "add to README (#5467)",
          "timestamp": "2026-04-01T11:01:30Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/3d31393bed99a1d9af5adafda91695ea23408a87"
        },
        "date": 1775047076637,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012201,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9530805,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.784506,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.558737,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.530833,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522545,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.618119,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270489,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340062,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525885,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.030920777450000003,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35178324363,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06465691874,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04934413996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11854144482000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29958343217,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.049499052099999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07598504905999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12941252191,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10065263592000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09731718126000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09612405369999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08650634012,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08862048978,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.10000299519,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09148590679,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tomás Chor",
            "username": "tomchor",
            "email": "tomaschor@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fce0e977ff69fcd650fb731072b70fdef8fd7178",
          "message": "Add BulkDrag boundary conditions documentation (#5464)\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-04-01T13:21:03Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/fce0e977ff69fcd650fb731072b70fdef8fd7178"
        },
        "date": 1775064203069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012646,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.954215,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.779112,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.561903,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.531152,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.524464,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.618565,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.271032,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341277,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525852,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03307938633,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35179613951,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06475120724,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049504803449999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11829061497,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29926607992,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04817820404,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07607728230000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12893168176,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10073477626,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09730669279000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09567783371000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08648701193000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08877035865999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.0999785032,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tomás Chor",
            "username": "tomchor",
            "email": "tomaschor@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "81eba9602c57b953598f9e16943c8f722df8c621",
          "message": "Fill small documentation gaps (Units, SphericalCoriolis, background_closure_fluxes, PiecewiseLinearMask) (#5463)\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\nCo-authored-by: tomchor <13205162+tomchor@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>",
          "timestamp": "2026-04-01T19:22:24Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/81eba9602c57b953598f9e16943c8f722df8c621"
        },
        "date": 1775077078869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01268,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9661995,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.780617,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.564496,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.534096,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.527152,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.617622,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.271032,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.34003,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525949,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03071205318,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35175096066,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06547799734,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049532449959999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11831500560000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29983120369,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048361643079999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07602318416,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12946672332,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10063115235,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09729024514000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09569879253,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647486580000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08892100034,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09978657776000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09032658042,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a7b8beddea8fbfe6a96c4bc85652d6f6ebd27542",
          "message": "(0.106.4) Move NetCDF output attribute methods from extension to Models module (#5469)\n\n* Move default_output_attributes and add_schedule_metadata! stubs to main module\n\nThese functions were defined entirely in OceananigansNCDatasetsExt despite\nnot depending on NCDatasets. This prevented downstream extensions (e.g.\nClimaSeaIce) from adding methods at compile time, forcing them to use\n__init__ + @eval which breaks incremental compilation on Julia 1.12.\n\nBy declaring function stubs in src/OutputWriters and importing them in\nthe extension, any package extension can now extend these functions with\na simple `import` + method definition at compile time.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Move default_output_attributes and add_schedule_metadata! to OutputWriters\n\nThese methods have no dependency on NCDatasets and belong in the main\nOutputWriters module, not the NCDatasets extension. Also removes the\nnow-unused type aliases and imports from the extension.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix module load order: define output attribute methods after Models\n\nOutputWriters is included before BuoyancyFormulations and Models, so the\nmethod definitions can't live directly in OutputWriters.jl. Instead, keep\nstubs in OutputWriters and define the actual methods in a separate file\n(output_attributes.jl) that is included from Oceananigans.jl after Models.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add missing using statements for output_attributes.jl\n\nThe file is included at top-level Oceananigans scope before the\nusing .Grids etc. statements, so it needs its own explicit imports.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* some cleanup\n\n* Move output attribute methods to Models, keep only generic fallback in OutputWriters\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add default_tracer_attributes(::Nothing) fallback for models without buoyancy\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Gregory Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>",
          "timestamp": "2026-04-02T12:54:55Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/a7b8beddea8fbfe6a96c4bc85652d6f6ebd27542"
        },
        "date": 1775140281217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012967,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9521675,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7795765,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.559728,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.528656,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.519505,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6154945,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269048,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339422,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526941,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03284986284,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35175059750000004,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.07247356824,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049256724839999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11827665722000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29997191297000003,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048146753230000006,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07601109537,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12970346708,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10051204169,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09779388704,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09565459623,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647543519999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08874455388,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09980394780999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09055744532,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "89eead1e9403a7e48e252b26a4cf832a3b841ef8",
          "message": "Use active_cells_map for CATKE on ImmersedBoundaryGrids (#5447)\n\n* Use active_cells_map for CATKE kernels on ImmersedBoundaryGrids\n\nAdd `launch_over_active_cells!` utility that handles launching kernels\nover active cell maps, including the distributed case where the map is\na NamedTuple of sub-maps. Use it for all CATKE kernel launches\n(closure fields, TKE diffusivity, TKE time-stepping) and the surface\nbuoyancy flux kernel. This avoids computing over immersed (inactive)\ncells, improving performance for ImmersedBoundaryGrids.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Unify active cells map API and extend launch! for NamedTuple maps\n\n- Add `get_active_cells_map(grid, Val(:xyz))` returning full interior\n  active cells (single array or NamedTuple for distributed)\n- Add `get_active_cells_map(grid, Val(:xy))` for active columns,\n  replacing `get_active_column_map`\n- Extend `_launch!` to iterate over NamedTuple sub-maps (distributed)\n- Use active cells maps in all CATKE kernel launches\n- Remove `launch_over_active_cells!` and `get_interior_active_cells`\n- Update SplitExplicit and tests to use new API\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* this should remain\n\n* Use active_cells_map for TKEDissipation kernels on ImmersedBoundaryGrids\n\nSame treatment as CATKE: pass active_cells_map from\nget_active_cells_map(grid, Val(:xyz)) to all launch! calls in\ncompute_closure_fields! and time_step_tke_dissipation_equations!.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Use active_cells_map in TKEDissipation compute_closure_fields!\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-02T14:59:29Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/89eead1e9403a7e48e252b26a4cf832a3b841ef8"
        },
        "date": 1775147870842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.957688,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.780729,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.561809,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.532881,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526161,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.987412,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5843905,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340926,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642812,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526109,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03035552977,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32212776139,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.059984502190000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04933951715,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11020064728,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29157936415999997,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.040059430300000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.0680022054,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12069413448,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060359341,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.0892632939,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08720614685,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08658369,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08132887684,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09168793155999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lois Baker",
            "username": "loisbaker",
            "email": "lbaker@ed.ac.uk"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ddce08b1d82c324492c38b0474d41d204c61b90d",
          "message": "Pass grid to poisson_eigenvalues and set eigenvalues to be `eltype(grid)` (#5373)\n\n* Pass grid to poisson_eigenvalues, define with Float32 for Metal and add test\n\n* Remove trailing whitespace\n\n* Explicitly return Float64 Poisson eigenvalues\n\n* Return Poisson eigenvalues with eltype(grid) on Metal\n\n* Rename `JULIA_DEPOT_PATH` to the `.julia` for buildkite (#5368)\n\n* (0.105.4) Add basic tests for Reactant-Oceananigans correctness (#5093)\n\n* Add basic reactant correctness tests\n\n* comment out other tests\n\n* add more grids\n\n* implement take Gu tendency\n\n* test with different raise options\n\n* test raise=true and raise=false\n\n* raise=true\n\n* add fake halo filling kernels\n\n* filter triply periodic tests\n\n* add reactant to weakdeps\n\n* add more tests\n\n* updates\n\n* clean up\n\n* update report\n\n* fix\n\n* fix\n\n* update report\n\n* Update test_reactant_correctness.jl\n\n* Refactor new_data function to remove ReactantState\n\n* Change total_size function parameter type to ShardedGrid\n\n* try to restrict offset_array for sharding a bit more\n\n* test raise_first too\n\n* fix imports\n\n* Comment out failing Reactant correctness tests and remove raise=true mode\n\nDisable raise=true mode across all tests due to non-deterministic segfaults\nin Reactant's CanonicalizeLoopsPass (MLIR bug). Comment out TripolarGrid\nhalo tests (Zipper BC compilation crashes) and HydrostaticFreeSurfaceModel\ntime-stepping tests (MLIR codegen error: incorrect operand count). The\nremaining 102 tests (halo filling + Gu tendencies) pass reliably.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix CI to actually run Reactant correctness tests\n\nTEST_GROUP was set to \"reactant\" which matches no group in runtests.jl,\nso CI was running 0 Reactant tests and reporting success.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Attempt fix\n\n* Fix fix\n\n* Whitespace\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Delete test/fake_halo_fill_kernels.jl\n\n* Delete test/test_fake_halo_fill.jl\n\n* Delete reactant_raise_true_report.md\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Update runtests.jl\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Update test_reactant_correctness.jl\n\n* Apply suggestion from @glwagner\n\n* Use halo=(3,3,3) in Reactant correctness tests and skip initialization_update_state\\! for Reactant models\n\n- Increase halo size from (1,1,1) to (3,3,3) in fill_halo_regions\\! tests\n- Re-enable Bounded LLG topology test\n- Add no-op initialization_update_state\\! for ReactantHFSM to defer\n  kernel execution to first_time_step\\! (runs inside @compile context)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Revert fill_halo tests to halo=(1,1,1) to avoid MLIR pass bug on Linux x64\n\nhalo=(3,3,3) with periodic boundaries triggers a Reactant MLIR\noptimization pass failure on Linux x64. Keep halo=(1,1,1) for\nfill_halo tests (which pass) while compute_simple_Gu\\! retains\nhalo=(3,3,3) as required by WENO.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add MWE for Reactant MLIR pass failure on periodic halo kernels\n\nStandalone reproducer (no Oceananigans dependency) for the MLIR\noptimization pass bug on Linux x64 with halo size H=3.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Simplify MWE to single kernel\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Update MWE to reproduce ka_with_reactant error without CUDA\n\nRemove `using CUDA` so the MWE reproduces the same MethodError\nas Oceananigans: ka_with_reactant has no method without ReactantCUDAExt.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Comment out RectilinearGrid Gu tests with Periodic topologies\n\nReactant's MLIR raise pass fails on periodic halo-filling kernels with\nhalo >= 2 (\"cannot raise if yet\" error). Add standalone MWE reproducer.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Delete test/reactant_raise_periodic_halo_mwe.jl\n\n* Update MWE to reproduce compute_simple_Gu\\! CI test failure\n\nMinimal script using Oceananigans that reproduces the fill_halo_regions\\!\nraise=true failure on periodic topologies with halo=(3,3,3).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix MWE imports and usage instructions\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Use view instead of indexing in cpu_face_constructor_r (#5376)\n\n* Use view instead of indexing in cpu_face_constructor_r\n\nAvoids scalar indexing errors when grid data is stored on\nnon-CPU architectures (e.g. Reactant ConcreteIFRTArray).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add on_architecture(::CPU, ::OffsetArray{..., <:AnyConcreteReactantArray})\n\nThe generic fallback on_architecture(arch, a) = a doesn't convert\nOffsetArrays wrapping Reactant arrays. This adds a proper method\nthat converts the underlying Reactant array to Array while preserving\nthe OffsetArray wrapper.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Delete test/reactant_raise_periodic_halo_mwe.jl\n\n* Add maybe_initialize_state\\! no-op for Reactant models\n\nThe iteration == 0 check in maybe_initialize_state\\! evaluates at trace\ntime (ConcreteRNumber(0) == 0 is true), causing a redundant update_state\\!\nto be compiled into every time_step\\!. Make it a no-op for Reactant models\nsince first_time_step\\! handles initialization explicitly.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Apply suggestion from @glwagner\n\n* Replace bcs... splatting with explicit indexing in fill_halo_event\\!\n\nExtends the fix from 0807efecf to polar_boundary_condition.jl and\nfill_halo_regions_open.jl. Reactant cannot reconcile different call\narity from splatting variable-length tuples into the same kernel.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Pass clock and fields to only_local_halos fill_halo_regions\\! calls\n\nAvoids empty args tuple in fill_halo_event\\!, which causes Reactant\nMLIR compilation failures (empty tuples get eliminated at call sites\nbut not in function definitions, causing operand count mismatch).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add nothing to tendency kernels for Reactant compatibility\n\nKA kernels with implicit Float64 return values (from array assignment\nas last expression) cause Reactant to generate a Returns{Float64}\nparameter in the LLVM function definition that doesn't match the call\nsite. Adding `nothing` as the last expression prevents this.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add kernel_clock workaround for Reactant MLIR/LLVM lowering bug\n\nReactant/Enzyme generates a phantom pointer parameter when mutable structs\ncontaining ConcreteIFRTNumber scalar fields are placed in tuples passed to\nKA kernels. This causes 'llvm.call incorrect number of operands' errors.\n\nThe workaround converts Clock to a NamedTuple (via kernel_clock) before\nplacing it in kernel argument tuples. The NamedTuple has identical field\naccess semantics and doesn't trigger the LLVM bug.\n\n- kernel_clock(clock) defaults to identity (no-op on CPU/GPU)\n- Reactant extension overrides to return NamedTuple\n- Applied to all HFSM call sites: tendency kernels, fill_halo_regions\\!,\n  implicit_step\\!, flux BCs, split-explicit substepping\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* revert\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Test more things\n\n* is it about the halo size?\n\n* run Reactant tests on 1.11.9\n\n* put halo back to 3\n\n* simplify SubArray convertion to arch\n\n* emit something silly for prettytime of tracednumber\n\n* try to run reactant tests with checkbounds=auto\n\n* fix dispatch\n\n* resolve multi region ambiguity\n\n* Apply suggestion from @glwagner\n\n* multiregion fill halo fix\n\n---------\n\nCo-authored-by: William Moses <gh@wsmoses.com>\nCo-authored-by: dkytezab <danielkytezable@gmail.com>\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Bump julia-actions/cache from 2 to 3 (#5382)\n\nBumps [julia-actions/cache](https://github.com/julia-actions/cache) from 2 to 3.\n- [Release notes](https://github.com/julia-actions/cache/releases)\n- [Commits](https://github.com/julia-actions/cache/compare/v2...v3)\n\n---\nupdated-dependencies:\n- dependency-name: julia-actions/cache\n  dependency-version: '3'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\n\n* Remove poisson_eigenvalues from OceananigansMetalExt\n\n* Set Poisson eigenvalues to eltype(grid)\n\n* Add tests for poisson_eigenvalues float type\n\n* Update docstrings for poisson_eigenvalues\n\n* Remove trailing whitespace\n\n* Fix missing newline at end of test_metal.jl\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: Tomás Chor <tomaschor@gmail.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: William Moses <gh@wsmoses.com>\nCo-authored-by: dkytezab <danielkytezable@gmail.com>\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-04-03T04:23:19Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/ddce08b1d82c324492c38b0474d41d204c61b90d"
        },
        "date": 1775386587580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.953992,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7892565,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.563696,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.535248,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526672,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.987828,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.584438,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339997,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64262,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526365,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02992426919,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32214802279,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.055182621779999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04929122105,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11015577646000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29177035101000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04001750408,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06798998243,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12074479551,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10066782755,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08931467895,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08722913854,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0865754811,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08129923477,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09155559335999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08242861583,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Gregory L. Wagner",
            "username": "glwagner",
            "email": "wagner.greg@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "446b88ea6f7ab580d50c62bb1fcc6184fe80ba1c",
          "message": "Add Reactant tests for single column grids (#5454)\n\n* Add Reactant tests for single column (Flat, Flat, Bounded) grids\n\nSingle column grids take a different code path through update_state!\nand fill_halo_regions! that is currently untested with Reactant.\nThese tests cover construction, compiled time stepping, the\nTKEDissipationVerticalDiffusivity closure, and Enzyme reverse-mode\ngradients for the single column case.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Mark TKEDissipation compiled time_step\\! as @test_broken\n\nThe batched tridiagonal solver used by TKEDissipationVerticalDiffusivity\nfails Reactant MLIR compilation with an 'arith.cmpi' type mismatch error.\nModel construction still works; only the compiled time-stepping is broken.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Change TKE test from @test_broken to @test since it passes on CI\n\nThe TKEDissipationVerticalDiffusivity test passes on Linux x64 CI.\nThe MLIR arith.cmpi error only occurs on macOS ARM64.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-03T14:00:32Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/446b88ea6f7ab580d50c62bb1fcc6184fe80ba1c"
        },
        "date": 1775392348167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.956792,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.784121,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.565584,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.534096,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.523377,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.987796,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.58415,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339998,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642876,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526397,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.033873430600000004,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32203304144999995,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060858266519999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04964806188,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11025083849,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29164315383,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.040434040510000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06802859072,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12072741434999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10066384290000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08941213433,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08729751331999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08654778927000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0812677424,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09149568889,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08232567987,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Gregory L. Wagner",
            "username": "glwagner",
            "email": "wagner.greg@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c69b6eb282a03fbbf568095e25e4f53a68a2306b",
          "message": "Fix ContinuousBoundaryFunction dispatch ambiguity on Flat grids (#5472)\n\n* Fix ContinuousBoundaryFunction dispatch ambiguity on Flat grids\n\nWhen a grid dimension is Flat, its location type is Nothing, which\ncollides with the convention that the boundary-normal dimension also\nhas location Nothing. This caused method ambiguity errors for\nContinuousBoundaryFunction getbc on grids like (Flat, Flat, Bounded).\n\nAdd grid-type-constrained disambiguation methods for all combinations\nof two and three Nothing location parameters, for both domain boundary\n(2-index) and immersed boundary (3-index) getbc methods.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Use normal FieldBoundaryConditions constructor in test\n\nUse regularize_field_boundary_conditions to process BCs, matching\nhow model constructors handle user-provided boundary conditions.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Replace grid-type disambiguation with BoundaryNormal sentinel type\n\nInstead of adding grid-type-constrained methods (which created more\nambiguities than it resolved), use a BoundaryNormal sentinel type\nfor the boundary-normal direction in ContinuousBoundaryFunction.\n\nPreviously, Nothing was used for both Flat dimensions and boundary-\nnormal directions, causing dispatch ambiguity. BoundaryNormal is a\ndistinct type that unambiguously marks the boundary-normal direction,\neliminating all practical ambiguities without adding any new methods.\n\nAqua recursive ambiguity count: 343 (baseline) → 325 (with fix).\nCBF-specific ambiguities: 6 theoretical (unchanged, unreachable).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Update location tests to expect BoundaryNormal instead of Nothing\n\nThe boundary-normal direction now uses BoundaryNormal instead of\nNothing, so the location assertions in the integration tests need\nto be updated accordingly.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add field_dependencies test for ContinuousBoundaryFunction on Flat grid\n\nExercises the interpolation_code(::BoundaryNormal, ...) methods to\nimprove patch coverage.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* better name for new location\n\n* Improve coverage: build and time-step model on Flat grid\n\nReplace explicit interpolation_code tests with a full model build\nand time_step! on a (Flat, Flat, Bounded) grid with field-dependent\nContinuousBoundaryFunction. This exercises the complete regularization\npath including all BoundaryAdjacent interpolation_code methods.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-03T20:32:23Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/c69b6eb282a03fbbf568095e25e4f53a68a2306b"
        },
        "date": 1775398129370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9470465,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7757835,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.559119,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.530032,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522703,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.987219,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.583893,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33987,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642812,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526173,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.030997807619999998,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.3221828744,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.056027038290000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04942129855,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11036005152,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29157554246,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04005825206,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06790602566,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12135860277999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060887383,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08920941201,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08718023176,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08655582021000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08131729046,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09144085671999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08220706613,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b71a2d71462b68cdd15da12fcf596e4cc616dd35",
          "message": "(0.106.5) Tick the clock before updating the state in `SplitRungeKutta` (#5477)\n\n* this will work\n\n* update version\n\n* add this\n\n* particles out of the loop\n\n* remove whitespace\n\n* much better",
          "timestamp": "2026-04-07T12:32:00Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/b71a2d71462b68cdd15da12fcf596e4cc616dd35"
        },
        "date": 1775570730574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.95678,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.782157,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.556883,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526931,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.519379,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988277,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5810955,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338558,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642908,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526301,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03060376036,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32225215073,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.057521220690000006,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049428380870000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11024485393000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.291495226,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.040287531259999995,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06802381349,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12073434169000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10070963950999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08927972977,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08724581456,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08645884436,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08132047559,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09168029383000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aa537c799ce2904038a14ef5bc900853126fd7be",
          "message": "Move velocity halo filling into `rk3_substep!` and `ab2_step!` for `HydrostaticFreeSurfaceModel` (#5352)\n\n* this should work\n\n* this should be correct\n\n* Import surface and volume kernel parameters\n\n* correct the implicit solver\n\n* will this work?\n\n* this should work now\n\n* just a test still stuff to fix\n\n* masking was the issue\n\n* new changes\n\n* some more bugfixes\n\n* we need transport velocities for all free surfaces\n\n* no-op for a nothing free surface\n\n* do not need to reupdate vertical velocities anymore\n\n* Potential fix for pull request finding\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>\n\n* Potential fix for pull request finding\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>\n\n* cover ZeroField appropriately\n\n* import Face and Center\n\n* Fix XLA buffer donation error from aliased clock fields in tick!\n\nIn tick!, both clock.last_Δt and clock.last_stage_Δt were set to the\nsame Δt.mlir_data, causing them to alias. Inside @trace for loops,\nthis triggers \"Attempt to donate a buffer which is also used by the\nsame call to Execute()\" because XLA tries to donate one while reading\nthe other in the while loop carry. Break the alias by creating a copy\nvia Δt + zero(Δt) for last_stage_Δt.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove initialization_update_state! and clean up initialization\n\nReplace the confusing `initialization_update_state!` with a clear separation\nof concerns between `reconcile_state!`, `initialize!`, and `update_state!`:\n\n- `reconcile_state!`: ensures auxiliary state (barotropic velocities, vertical\n  coordinate scaling) is consistent with prognostic fields. Called in `set!`\n  and `initialize!`. Idempotent.\n\n- `initialize!`: one-time setup before first time step. Calls `reconcile_state!`,\n  synchronous halo fills, and `initialize_closure_fields!`. Allowed to be\n  non-idempotent.\n\n- `update_state!`: idempotent recomputation of diagnostics/derived quantities.\n  Called every time step and after `set!`.\n\nRenames:\n- `initialize_free_surface!` → `reconcile_free_surface!`\n- `initialize_vertical_coordinate!` → `reconcile_vertical_coordinate!`\n- `maybe_initialize_state!` → `maybe_initialize!` (now also calls `initialize!`)\n\nThe `set!` function gains a `reconcile_state` kwarg (default `true`) for\nadvanced users who set barotropic velocities independently.\n\nBump version to 0.106.1.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove initialize! call from maybe_initialize!\n\nmaybe_initialize! should only call update_state!, not initialize!.\nCalling initialize! inside time_step! would cause double-initialization\nwhen used with Simulation (which already calls initialize! in\nSimulation.initialize!).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Rename maybe_initialize! to maybe_prepare_first_time_step!\n\nAlso move reconcile_state! definition to TimeSteppers (where update_state!\nlives) and call it from maybe_prepare_first_time_step! so that bare\ntime_step!(model, Δt) reconciles state on the first step.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Use optimization_barrier instead of +zero to break clock field alias\n\nXLA folds Δt + zero(Δt) → Δt, so the aliasing between last_Δt and\nlast_stage_Δt persists. Use Reactant.Ops.optimization_barrier which\nXLA cannot fold, ensuring distinct buffers for the while loop carry.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add materialize_clock! and remove optimization_barrier from tick!\n\nAdd `materialize_clock!(clock, timestepper)` called in HFSM and NH model\nconstructors. For QuasiAdamsBashforth2TimeStepper, this sets\n`clock.last_Δt = clock.last_stage_Δt` to ensure they are distinct objects.\nThis is needed for Reactant, where aliased ConcreteRNumber fields cause\nXLA buffer donation errors in compiled loops.\n\nWith materialize_clock! breaking the alias at construction time, the\noptimization_barrier workaround in the Reactant tick! override is no\nlonger needed and is removed.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Restore optimization_barrier in Reactant tick!\n\nmaterialize_clock! in the constructor doesn't prevent MLIR-level aliasing\nthat occurs at runtime inside tick! when both last_Δt and last_stage_Δt\nare assigned the same Δt value. The optimization_barrier is still needed\nuntil Reactant provides a proper buffer copy op.\n\nSee https://github.com/CliMA/Oceananigans.jl/pull/5389#discussion_r2969696801\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove optimization_barrier from Reactant tick!\n\nmaterialize_clock! in the model constructor ensures last_Δt and\nlast_stage_Δt are distinct ConcreteRNumber objects. Assigning the same\nvalue to both in tick! via .mlir_data does not re-alias the objects.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Move materialize_clock! QAB2 method to Reactant extension\n\nFor QAB2, last_Δt and last_stage_Δt always hold the same value after\ntick!. In the Reactant extension, materialize_clock! aliases them via\nsetfield! (bypassing the ReactantClock setproperty! override) so that\nReactant's tracer sees one buffer, avoiding XLA buffer donation errors.\n\nThe src/ QAB2 method is removed since aliasing is only needed for\nReactant's ConcreteRNumber fields (normal Float64 fields are immutable\nvalues with no aliasing concern).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* import Field\n\n* rm stale import\n\n* fill free surface halos before timestepping\n\n* remove stale imports\n\n* add fill halos in reconcile_state!\n\n* now just need to fix multi-region\n\n* cubed sphere implementation\n\n* fix the dispatch\n\n* barotropic correction for implicit free surface\n\n* add an MC Repl command\n\n* fix all tests\n\n* remove whitespace\n\n* mask velocities before filling\n\n* remove stale imports\n\n* fix multi-region behavior\n\n* remove whitespace\n\n* correct GPU tests\n\n* fix all tests\n\n* fix whitespace\n\n* this is better\n\n* remove vestigial file\n\n* update now\n\n* mask velocities where needed\n\n* remove whitespace\n\n* we can use CATKE without synchronization!\n\n* remove stub\n\n* better comment\n\n---------\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>\nCo-authored-by: Gregory Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>",
          "timestamp": "2026-04-07T13:40:16Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/aa537c799ce2904038a14ef5bc900853126fd7be"
        },
        "date": 1775593143232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08268961201,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.947931,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.780124,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.560018,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.52981,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522962,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988854,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.58172,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338527,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642589,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.527165,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.030749717479999997,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32415956606,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05718119025,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049844522509999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11077002285000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29259763837,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.0406695919,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06888501264,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12130735056000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10291113126000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09019450055,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08797135241,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08703960728,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08174753504,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09211019187,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08268961201,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08268961201,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08268961201,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08268961201,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08268961201,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08268961201,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8ac0881ae3f512846bfca5183b4bb6d9977df8c1",
          "message": "Use r-based derivatives in diffusion operators (#5401)\n\n* start changing\n\n* change GM and Redi\n\n* add a test\n\n* fix diffusion\n\n* remove whitespace\n\n* step a bit more\n\n* step a bit more\n\n* add the \"nothing\" buoyancy\n\n* fix all tests\n\n* Remove unnecessary blank line in test file\n\n* change notation\n\n* spacing\n\n* change notation\n\n* bugfix\n\n* remove the TISSD test for now\n\n* fix all tests\n\n* fix materialized gradients\n\n* another correction\n\n* test like this\n\n* fix tests\n\n* correct laplacian operators\n\n* typo",
          "timestamp": "2026-04-07T13:46:45Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/8ac0881ae3f512846bfca5183b4bb6d9977df8c1"
        },
        "date": 1775598707360,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08299731546,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.960106,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7797545,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.565874,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.539442,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.529042,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988181,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.584807,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.337918,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643068,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526269,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02965055262,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32448560029,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.057947757429999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.05009070342,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11056617886,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29227256301,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04197630749,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06859814186,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.1214126296,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10131394613,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09040859367,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08868563393000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08703349477,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08178494319,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09234585926,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08299731546,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08299731546,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08299731546,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08299731546,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08299731546,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08299731546,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dkytezab",
            "username": "dkytezab",
            "email": "danielkytezable@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1a4a764bf19eaa9399006d9be9f185ac320589ac",
          "message": "Ensure discretization ranges match float type (#5475)\n\n* Update grid_generation.jl\n\n* Update Architectures.jl\n\n* Revert grid generation changes\n\n* Update Architectures.jl\n\n* Update ext/OceananigansReactantExt/Architectures.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Slacken slightly\n\n---------\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-04-08T03:16:08Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/1a4a764bf19eaa9399006d9be9f185ac320589ac"
        },
        "date": 1775623762561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08268454736000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.948076,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.780349,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.552723,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.524915,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.516372,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.98799,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5850005,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338686,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643005,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.52627,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.0321236173,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32439209724,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05672507383,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04992234937,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11079284463,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29223672133,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04063059156,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06855548763,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12181590828,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.1013666374,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09065332256,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08835067134999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08713181568,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08180555152,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09195080175999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08268454736000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08268454736000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08268454736000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08268454736000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08268454736000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08268454736000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e5cddd9570c8a93a7e0e4c3c81ea130ecd8eccb3",
          "message": "Use active cells map when kernels try to launch with `:xyz` or `:xy` (#5471)\n\n* always use active cells map\n\n* restart tests\n\n* remove whitespace\n\n* typo\n\n* restart tests\n\n* import Utils\n\n* Restore ProjectDistributed.toml swap and add MPI system binary preference\n\nThe segfault in libmpiwrapper.so was caused by MPI.jl using the JLL\nartifact MPI while srun launches with system MPI. Setting\nMPIPreferences binary = \"system\" fixes the mismatch.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Revert \"Restore ProjectDistributed.toml swap and add MPI system binary preference\"\n\nThis reverts commit 228c045ab87eda7df6dbc378b26f4e688ccd13ba.\n\n* name change\n\n* remove implicit imports\n\n* alignment\n\n* send\n\n* remove the exclude periphery as an option\n\n* fix indices for AMDGPU and Metal\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-08T11:55:09Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e5cddd9570c8a93a7e0e4c3c81ea130ecd8eccb3"
        },
        "date": 1775655029665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07925347598,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.952342,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.787479,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.561231,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.532975,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.523152,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988659,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.565366,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341278,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642076,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482493,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03278949176,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.31123452385,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06230006713,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.0496465341,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10730838899,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28944823373,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03714279536,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06503616473,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11785790134000002,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10122126567,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08735309674,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08461563194,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08703602718,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07878348017999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08774241080999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07925347598,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07925347598,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07925347598,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07925347598,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07925347598,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07925347598,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dkytezab",
            "username": "dkytezab",
            "email": "danielkytezable@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4f171451abf7de2bf18630aaf1deef8cbf855ed4",
          "message": "Attempts to fix energy conservation for flux-form advection on curvilinear grids (#5437)\n\n* Initial commit\n\n* Update curvature_metric_terms.jl\n\n* Update curvature_metric_terms.jl\n\n* Fix curvature metric dispatch on non-curvilinear grids\n\nThe previous structure dispatched on `RectilinearGrid` to short-circuit to\n`zero(grid)`, with the generic `(grid, advection, U, V)` branch falling\nthrough to the active computation. This is fragile: an\n`ImmersedBoundaryGrid{...,<:RectilinearGrid}` does NOT match\n`grid::RectilinearGrid`, so it fell through to the active branch and errored\non `grid.radius` (RectilinearGrid has no radius field). This broke\nNonhydrostaticModel + ImmersedBoundaryGrid + non-vector-invariant advection.\n\nInvert the dispatch:\n- Default `U_dot_∇{u,v,w}_metric(grid, advection, U, V) = zero(grid)` covers\n  RectilinearGrid, IBG{RectilinearGrid}, and any non-curvilinear grid.\n- Active branch dispatches on `Union{AbstractHorizontallyCurvilinearGrid,\n  ImmersedBoundaryGrid{...,<:AbstractHorizontallyCurvilinearGrid}}`, which\n  picks up both LatitudeLongitudeGrid / OrthogonalSphericalShellGrid and\n  IBG-of-curvilinear.\n- VectorInvariant + Nothing branches now only need ambiguity-resolution\n  methods on the curvilinear union, not on every grid type.\n\nAlso rename the internal `_nonhydrostatic_metric_u/v` helpers to public\n`U_dot_∇u_nonhydrostatic_metric` / `U_dot_∇v_nonhydrostatic_metric` so they\nmatch the existing `U_dot_∇u_hydrostatic_metric` naming and are exported\nfrom `Advection.jl`.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add solid body rotation tests for curvature metric terms\n\nValidation tests for the new flux-form metric corrections in\n`src/Advection/curvature_metric_terms.jl`.\n\nDirect unit test (rigorous): builds u = u₀ cos(φ), v = w = 0 on a\nLatitudeLongitudeGrid and asserts that `U_dot_∇{u,v,w}_metric` evaluates\nto its analytic centrifugal value at every interior point:\n  - U_dot_∇u_metric ≈ 0\n  - U_dot_∇v_metric ≈ +u² tan(φ) / a\n  - U_dot_∇w_metric ≈ -u² / a\nRemoving the metric corrections from the source makes ~860 of these\n1320 assertions fail by orders of magnitude (verified by sabotage).\n\nIntegration tests (smoke): solid body rotation on a LatitudeLongitudeGrid\nin both NonhydrostaticModel (SphericalCoriolis + ConjugateGradientPoisson\nsolver) and HydrostaticFreeSurfaceModel (HydrostaticSphericalCoriolis +\nWENOVectorInvariant + analytic balanced free surface). Verify simulations\nremain bounded over 10 steps.\n\nRegression test: NonhydrostaticModel on `ImmersedBoundaryGrid` wrapping a\nRectilinearGrid + WENO must time-step without erroring on `grid.radius`.\nThis was the failing case before the dispatch was inverted.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-08T21:15:41Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/4f171451abf7de2bf18630aaf1deef8cbf855ed4"
        },
        "date": 1775688657354,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07925117043,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.947688,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.788729,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.565105,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.535185,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526097,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.990388,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567015,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341822,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64278,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491741,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03012918882,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.31135489777,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05362920988,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04972990971,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10743045033,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28959717591,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03707801204,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06498622123,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11788307516,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10129347327999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08762187577000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08452262008,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08707246756,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07876181871,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08772242019,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07925117043,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07925117043,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07925117043,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07925117043,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07925117043,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07925117043,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Paul Berg",
            "username": "Pangoraw",
            "email": "naydex.mc+github@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "265de2ef0b633696ebc9da1a363b4825b854f238",
          "message": "Define reactant_offset_data for TracedRArray (#5480)\n\n* Define reactant_offset_data for TracedRArray\n\n* Apply suggestion from @glwagner\n\n---------\n\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>",
          "timestamp": "2026-04-09T00:54:21Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/265de2ef0b633696ebc9da1a363b4825b854f238"
        },
        "date": 1775702775016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07925852198,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9523265,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7877515,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.55448,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526224,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.515728,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.990675,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5666295,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341758,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64246,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491613,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02827993569,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.31130931058,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05555841178,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04963019946,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10738569183999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28929453959,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037389052820000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06527824787,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11840999031,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10131908782,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08734841852000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08455216018,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08702544799,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07876024084,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08784071373999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07925852198,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07925852198,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07925852198,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07925852198,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07925852198,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07925852198,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Benoît Pasquier",
            "username": "briochemc",
            "email": "4486578+briochemc@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f21a80bbb8947aa0c263ae683e9602a3c6211467",
          "message": "Fix distributed tripolar fold (#5439)\n\n* Add distributed fold topology types and fix tripolar halo fill\n\nIntroduce 4 new topology types for distributed tripolar grid fold boundaries:\n- LeftConnectedRightCenterFolded (1xN UPivot)\n- LeftConnectedRightFaceFolded (1xN FPivot, Face-extended)\n- LeftConnectedRightCenterConnected{WestOfPivot/EastOfPivot} (MxN UPivot)\n- LeftConnectedRightFaceConnected{WestOfPivot/EastOfPivot} (MxN FPivot, Face-extended)\n\nThese replace the previous FullyConnected y-topology on northernmost distributed\nranks, which lost fold information and caused FPivot CF/FF fields to crash (OOB)\nbecause they need Ny+1 Face points.\n\nKey changes:\n- Grids.jl: new types, WestOfPivot/EastOfPivot, global_fold_topology()\n- grid_utils.jl: BoundedTopology union includes Face-extended fold types\n- distributed_grids.jl: insert_connected_topology 5-arg methods for fold topologies\n- distributed_zipper.jl: complete rewrite with topology-based buffer dispatch,\n  corrected y-ranges for Face-extended grids, fold-line WoP/EoP handling\n- Tripolar struct simplified to 3 type params (fold info now in grid topology)\n- Split-explicit, advection, and BC unions updated for new types\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Store fold topology in Tripolar type parameter and fix distributed halo fill\n\n- Make Tripolar{N,F,S,FT} carry the fold topology as a phantom type\n  parameter (isbits for GPU). Add fold_topology() getter, remove\n  global_fold_topology() which could not resolve the fold type from\n  non-fold rank topologies (FullyConnected, RightConnected).\n\n- Fix reconstruct_global_grid and with_halo for distributed TripolarGrid:\n  pass fold_topology from conformal_mapping so FPivot grids reconstruct\n  correctly (was defaulting to RightCenterFolded).\n\n- Fix distributed zipper corner buffers: use has_fold_line to size\n  corner buffers (Hy+1 when fold line present), dispatch on\n  TwoDZipperBuffer only (corners not needed for 1D partitions),\n  remove redundant arch::Distributed constraint, rename H→Hy.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Replace WestOfPivot/EastOfPivot with per-buffer FL/WFL fold-line dispatch\n\nRemove the WestOfPivot/EastOfPivot type parameter from topology types\nand replace with per-buffer fold-line control via two new type parameters\non TwoDZipperBuffer and ZipperCornerBuffer:\n\n- FL (fold line in buffer): true when the buffer contains the fold-line\n  row (Hy+1 rows). Set to has_fold_line() for ALL buffers to ensure MPI\n  size matching between mirror partners.\n\n- WFL (writes fold line): true when the recv should write the fold-line\n  row. Computed per-buffer from the rank's x-position relative to the\n  pivot (Nx/2), accounting for periodic wrap at domain boundaries.\n\nHelper functions north_writes_fold_line, northwest_writes_fold_line,\nnortheast_writes_fold_line determine WFL based on rx and Rx.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Replace WestOfPivot/EastOfPivot with per-buffer FL/WFL fold-line dispatch\n\n- Remove WestOfPivot/EastOfPivot type parameters and pivot_side function\n- Add FL (fold-line in buffer) and WFL (writes fold line) type parameters\n  to TwoDZipperBuffer and ZipperCornerBuffer\n- Per-buffer fold-line helpers: north/northwest/northeast_writes_fold_line\n  accounting for both pivot points (x-periodicity)\n- TripolarXBuffer with location-aware y-size using length(loc_y, topo, Ny)\n  instead of has_fold_line (only FPivot Face-y gets Ny+1, not UPivot)\n- Temporary @info diagnostics for send/recv tracing (to be removed)\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove temporary @info diagnostics from distributed_zipper.jl\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Complementary x-buffer fold-line handling with FL/WFL on TripolarXBuffer\n\nAdd FL/WFL type parameters to TripolarXBuffer, mirroring the north/corner\nbuffer pattern. The west/east x-buffers complement the adjacent NW/NE\ncorner: if the corner writes the fold line, the x-buffer skips it (and\nvice versa), ensuring no overlapping writes with async MPI.\n\nSeparate west_tripolar_buffer and east_tripolar_buffer constructors since\nthey complement different corners (NW vs NE).\n\nRemaining: Face-x pivot point (global x = Nx/2+1) at the fold line is\nunfilled in distributed because it falls in the gap between the NE corner\n(Hx-1 columns) and the east x-buffer (WFL=false). This only affects the\nexact pivot point which is under land in real ocean configurations.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove leftover debug variable from FC UPivot north recv\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Replace zipper_bc with north_fold_boundary_condition, remove redundant ZBC\n\n- Remove local zipper_bc function (duplicated north_fold_boundary_condition)\n- Use north_fold_boundary_condition(fold_topology(...))(sign) directly\n- Remove local const ZBC (already defined in BoundaryConditions)\n- Import ZBC from BoundaryConditions\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove unnecessary <: from north_fold_boundary_condition for concrete types\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* formatting\n\n* Update src/OrthogonalSphericalShellGrids/tripolar_grid.jl\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\n\n* Simplify distributed_zipper.jl and fix FPivot kernel coverage\n\n- Refactor distributed_zipper.jl: replace ~65 combinatorial send/recv methods\n  with ~20 using helper functions for y-ranges, x-ranges, and type-parameter\n  accessors. Move FL/WFL to front of type parameter list for clean dispatch.\n  Consolidate 4 corner buffer constructors into 2.\n\n- Fix FPivot distributed simulation mismatch: extend async buffer tendency\n  kernel parameters to use worksize(grid) instead of size(grid), ensuring the\n  fold line at Ny+1 is covered by the buffer pass for RightFaceFolded grids.\n\n- Add worksize override for distributed FPivot grids (DRFTRG) so kernels\n  correctly operate on the extra Face-y row at Ny+1.\n\n- Remove stale explicit imports (FZBC, UZBC, RightConnected,\n  instantiated_location) and fix self-qualified fold_topology access.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove stale UPivot fold BC overrides from test utils\n\nThe overrides were modifying the serial fold BC to skip the fold-line\nconsistency substitution, which is no longer needed now that the\ndistributed fold handles this correctly.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix self-qualified fold_topology access by inlining into keyword argument\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\n\n* Fix fold topology type: FT -> TY\n\n* Remove unused methods\n\n* import fill_halo_regions!\n\n* Remove dead OneDZipperBuffer code\n\nOneDZipperBuffer was never constructed because slab partitions (Rx=1) use\nthe serial fold BC directly, not a DistributedZipper. The OneDFoldTopology\n+ DistributedZipper combination was impossible. Re-add loc_id import needed\nby distributed_zipper_north_tags.jl.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix missing comma in using statement in SplitExplicitFreeSurfaces\n\n* Add RightFaceFolded (FPivot) coverage to distributed tripolar MPI tests\n\nLoop over both fold topologies (RightCenterFolded, RightFaceFolded) in\ngrid reconstruction, field reconstruction, boundary condition, and\nsimulation tests. The run_distributed_tripolar_grid helper now requires\nan explicit fold_topology keyword argument.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix analytical_immersed_tripolar_grid southern masking for FPivot grids\n\nUse φ < φm + radius instead of φ < φm to immerse the southernmost row\non RightFaceFolded grids, where southernmost_latitude sits at the cell\nface so j=1 centers are slightly north of φm. Without this, the tracer\nfield diverges between serial and distributed runs on FPivot grids.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\n\n* declutter line for north BC\n\n* Use TY throughout for fold_topology type\n\n* Remove misplaced comment\n\n* declutter + clearer helper function names + simplify dispatch\n\n* `lx` -> `ℓx` and `Topo` -> `TY`\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>",
          "timestamp": "2026-04-09T01:42:31Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f21a80bbb8947aa0c263ae683e9602a3c6211467"
        },
        "date": 1775708361066,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07911291280999999,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.945375,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7896475,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.558965,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.529909,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.523093,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988472,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.56561,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.342238,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642109,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482558,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.032977883879999996,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.31153314565,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05272640333,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04965783886,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10726668471,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28954337826,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03708726502,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06507267717000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11776303978,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10127639258,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08752156183,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08447209826,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0870398984,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07876991134,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08774411335,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07911291280999999,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07911291280999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07911291280999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07911291280999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07911291280999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07911291280999999,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Benoît Pasquier",
            "username": "briochemc",
            "email": "4486578+briochemc@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f3c73c96c60c2dd10a6d29778a91dd1ecf2a4554",
          "message": "`BoundedTopology` -> `FaceExtendedTopology` (#5482)",
          "timestamp": "2026-04-09T10:29:08Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f3c73c96c60c2dd10a6d29778a91dd1ecf2a4554"
        },
        "date": 1775736226091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07935415108,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.952119,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.785769,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.563568,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.534225,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.52552,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988788,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5656385,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340319,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642268,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482429,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03264400486,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.31149558055,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05498198151000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04960188634,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10738023805,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28967259487,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03726886542,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06534197583,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11783550025,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10143539933,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08737004384000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08458732171,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08704295946,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07887159366,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08779592949,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07935415108,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07935415108,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07935415108,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07935415108,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07935415108,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07935415108,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Benoît Pasquier",
            "username": "briochemc",
            "email": "4486578+briochemc@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b8012d5c184c12c0baaef739c53b623e0617c2e2",
          "message": "`old_bcs` -> `global_bcs` and `new_bcs` -> `local_bcs` (#5481)",
          "timestamp": "2026-04-09T13:29:59Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/b8012d5c184c12c0baaef739c53b623e0617c2e2"
        },
        "date": 1775746933050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07915997089,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9546,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7859775,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.561297,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.532912,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522129,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.990836,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5674145,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341726,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.6431,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491581,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02856639795,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.31133354458,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05800516124,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04971388676,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10739397752,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28928784553,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03722000786,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06503912516,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11785751527,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.1013249973,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08739820006,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08451330788,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08695849689999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07871783875,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08793752369,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07915997089,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07915997089,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07915997089,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07915997089,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07915997089,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07915997089,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mikolaj Adam Kowalski",
            "username": "Mikolaj-A-Kowalski",
            "email": "32641577+Mikolaj-A-Kowalski@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c109ce403c7e4ee81debc90e7312a64e116e1a7c",
          "message": "Use specialised implementation of `newton_div` on CUDA (#5140)\n\n* feat: use fast division on Nvidia GPUs in newton_div context\n\nAdds specialised implementation of the approximate `newton_div` for\nthe CUDA backend. It allows to avoid slow-path of the `rcp` and `div`\nand provides few per-cent speed-up of advection kernels.\n\n* fix: do not specify the type of numerator\n\nSince we just multiply reciprocal of denominator by the numerator we\ndon't need to know the exact representation of the numerator.\n\nIf specified can lead to unexpected dispatch to the fallback method if\nthe numerator is e.g. π literal (of type Irrational).\n\n* refactor: select type of newton_div in a WENO scheme by type parameter\n\n* fix: newton_div type propagation into buffer schemes\n\n* test: update doctests\n\n* feat: add CUDA fast division for f32\n\n* refactor: remove lower-precision WENO type parameter\n\nThis is a breaking change!\nIt requires requires minor version bump.\n\nIt has been made since the 2nd floating precision type parameter is no\nlonger required. It has been replaced with type-based specifier for the\ndivision type in WENO reconstruction scheme.\n\n* refactor: use `weight_computation` to refer to division type in WENO\n\n* refactor: make `newton_div` type names less verbose\n\n* test: add unit tests for newton_div\n\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\n\n* refactor: BackendOptimizedDivision in ConvertingDivision on CPU\n\nAdd a fallback to enable `BackendOptimizedDivision` to run on the CPU.\nThe fallback should be overriden for each device backend in an\napproperiate extension module.\n\n* refactor: use BackendOptimizedDivision by default\n\n* refactor: use normal division on the CPU\n\nThe difference in latency between f32 and f64 is small. It is probably\nnot enough to justify two conversions and FMAs. (not tested for\nperformance, it is conjecture)\n\n* refactor: do not use CUDA intrinsics under Reactant\n\nThe BackendOptimizedDivision optimization for `weno_weights_computation`\nuses LLVM's NVPTX backend intrinsics which are not understood by\nReactant. Thus we need to change the default when running under Reactant.\n\n* feat: add materialize_advection to defer configuration options\n\nTo resolve problems with Reactant not knowing about NVPTX intrinsics\nthat we are using in the backend optimised implementation, we need to\ndefer a choice of the default weno_weight_computation option until it is\nknown on what backend the problem will be run.\n\nTo do that we can rely on the `materialize` pattern used already in the\nsimilar circumstances.\n\n* feat: use advection materialisation in models\n\n* refactor: get rid of the global weight_computation setting\n\nIt is no longer necessary since the default can be assigned in the\nmaterialization of the advection schemes. It can also be dependent on a\nspecific architecture the problem will run on.\n\nTo change the default setting user just needs to override the function\n`default_weno_weight_computation(arch)`\n\n* fix: failing reactant tests\n\n* fix: add missing materialize_advection overloads\n\n* test: fix tests broken by changes to the API\n\n* fix: add missing overload for Distributed grid\n\n* test: add missing materialization step to test_forcing\n\nMove the MockGrid to the include file. Multiple test files need it and\nwe need to make sure it is defined once to avoid struct redefinition.\n\n* fix: extra end-of-file newlines\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\n\n* test: fix newton_div test\n\nThere was a type instability and test input was getting promoted to\nFloat64. As a result the Float32 was never verified and a typo in the\nintrinsic name was not caught ealier.\n\n* update minor version (numerical difference)\n\n---------\n\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>",
          "timestamp": "2026-04-15T09:08:47Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/c109ce403c7e4ee81debc90e7312a64e116e1a7c"
        },
        "date": 1776255525338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07644343468999999,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.74501,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6948825,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.331959,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.307575,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.302136,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989113,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.565706,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.343583,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642014,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482334,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03023161463,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29881871973,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05679582461,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04730645872,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10371889187000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28500580853,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03703882243,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06008458279,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11031580733,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09718670884,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08298060253999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08170110708999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08305707982999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07690675929,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08445471695000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07644343468999999,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07644343468999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07644343468999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07644343468999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07644343468999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07644343468999999,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tomás Chor",
            "username": "tomchor",
            "email": "tomaschor@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e34a623261357535b1309bef57875e9e0c00f67e",
          "message": "(0.106.6) Bugfix for the Lagrangian Averaged Dynamic Smagorinsky (#5504)",
          "timestamp": "2026-04-15T15:01:38Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e34a623261357535b1309bef57875e9e0c00f67e"
        },
        "date": 1776270879701,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07628972661,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.743001,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.691705,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.330802,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.305874,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.29861,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.98882,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5654295,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341822,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641756,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482461,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03287811839,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.2986746457,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.052641220960000006,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047326640309999994,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10391689193999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28502787165,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03738603981,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060127473589999994,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11024017811,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09709662892000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08298132891,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08171160937,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08304697929999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07592137824,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08430743234999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07628972661,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07628972661,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07628972661,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07628972661,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07628972661,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07628972661,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "10c0f41db2245e3c753fc51248eb9d81b653505b",
          "message": "(0.107.0) Save grid per field in `JLD2Writer` to be consumed by `FieldTimeSeries` (#5486)\n\n* local grid per field\n\n* one serialized too much\n\n* typo\n\n* adding a grid accessor\n\n* give it a try\n\n* fix the tests and allow only one grid without suffixes\n\n* fix jldocs tests\n\n* another fix\n\n* only save unique grids also for JLD2\n\n* fix define_output_variable!\n\n* fix docs and whitespace\n\n* update version\n\n* legacy should remain legacy\n\n* unprefix for one grid\n\n* fix NetCDFWriter doctest expected file sizes\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-15T21:52:39Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/10c0f41db2245e3c753fc51248eb9d81b653505b"
        },
        "date": 1776295753090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07618789118,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.738477,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.694173,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.335092,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.309332,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.304053,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988886,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5657205,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33923,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641725,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482397,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.028340256780000003,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29876301581,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05498200241,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047459041040000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10356775653,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28586022635999997,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03713459499,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060121987360000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11089890067000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09716862755,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08320343697,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08169445575999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08296830449999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07570256889,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08427568394,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07618789118,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07618789118,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07618789118,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07618789118,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07618789118,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07618789118,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "92a9d74b74a629efd790cb368c57b07efe03edf3",
          "message": "(0.107.0) Fix file splitting for JLD2Writer: OnDisk FTS, checkpointer pickup, and glob (#5492)\n\n* local grid per field\n\n* one serialized too much\n\n* typo\n\n* adding a grid accessor\n\n* give it a try\n\n* fix the tests and allow only one grid without suffixes\n\n* fix jldocs tests\n\n* another fix\n\n* only save unique grids also for JLD2\n\n* fix define_output_variable!\n\n* fix docs and whitespace\n\n* update version\n\n* Fix file splitting for JLD2Writer: OnDisk FieldTimeSeries, checkpointer pickup, and glob\n\nFix several interconnected bugs with JLD2Writer file splitting:\n\n1. Fix glob with absolute paths in FieldTimeSeries constructors - split\n   directory from pattern to avoid Glob.jl error on absolute paths.\n\n2. Fix OnDisk FieldTimeSeries with split files - introduce SplitFilePath\n   struct to track all part files and map global time indices to the\n   correct (file, local_index) pair. Previously OnDisk getindex used\n   the global index against a single file, crashing for indices beyond\n   the first part.\n\n3. Fix OnDisk set! signature to accept kwargs (warn_missing_data) when\n   called from the split file loading path.\n\n4. Fix checkpointer restore_prognostic_state! to update writer.filepath\n   to match the restored part number. Previously filepath stayed as the\n   base path after pickup, causing writes to the wrong file.\n\n5. Save and restore file_splitting schedule state in checkpoints so\n   TimeInterval splitting doesn't re-trigger on every write after pickup.\n\n6. Add post-split iteration_exists check in write_output! to gracefully\n   skip iterations that already exist in a part file (happens when\n   picking up from a checkpoint that predates the latest output).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Move NoFileSplitting prognostic_state methods to checkpointer.jl\n\nFix import conflict: prognostic_state and restore_prognostic_state! for\nNoFileSplitting were defined in output_writer_utils.jl without importing\nthem, creating local definitions that conflicted with the imported ones\nin checkpointer.jl. Move them to checkpointer.jl where the import exists.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Potential fix for pull request finding\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>\n\n* fixes for copilot review\n\n* restart tests\n\n* legacy should remain legacy\n\n* restart-tests\n\n* restart CI\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2026-04-17T16:17:36Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/92a9d74b74a629efd790cb368c57b07efe03edf3"
        },
        "date": 1776450844860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07623218045999999,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7385075,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6942995,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.323369,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.297929,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.291849,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991181,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5670085,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340733,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643578,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491355,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03321019651,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.2986637942,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05989813302,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04729163582,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10376405866,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28604903123,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03716170062,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06008151782,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11032623856000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09870574553000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08296850312,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08167789042000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08307714338,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07575867317,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08426929223,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07623218045999999,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07623218045999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07623218045999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07623218045999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07623218045999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07623218045999999,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Eliot Quon",
            "username": "ewquon",
            "email": "eliot@aeolus.earth"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ef504366e1d7abcf524b5aa1a53811182ef5d847",
          "message": "Fix Float32 WENO smoothness indicators via constant shift (#5491)\n\n* Mean-subtract WENO stencils to fix Float32 smoothness indicators\n\nThe smoothness indicator β is a quadratic form ψᵀCψ that is invariant\nto constant shifts (it measures derivatives of the interpolating\npolynomial). In Float32, when stencil values have a large mean\n(e.g., ρθ ≈ 300), the quadratic form suffers catastrophic cancellation:\nterms of O(ψ²) ≈ O(10⁵) cancel to give β ≈ O(10⁻²), exceeding\nFloat32's ~7 significant digits. This produces negative β values and\nwildly incorrect WENO weights.\n\nThe fix subtracts the stencil mean before computing β, reducing operand\nmagnitudes from O(ψ) to O(Δψ). This eliminates cancellation and\nrecovers Float64-accurate results (relative error < 0.001%) at a cost\nof ~11 FLOPs per sub-stencil. A dispatch on NTuple{N, Float32} ensures\nzero overhead for Float64.\n\nCloses CliMA/Oceananigans.jl#5485\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\n\n* Rename stencil helper func\n\n* whitespace\n\n* Subtract central stencil value instead of mean for efficiency\n\nReplaces sum(ψ)/N with a single element lookup ψ[N÷2+1], reducing\nthe overhead of the Float32 precision fix from 2N to N FLOPs per\nstencil while still shifting operand magnitudes from O(ψ) to O(Δψ).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Retrigger CI\n\n* Metaprogram Float32 stencil shift directly into smoothness expression\n\nInstead of creating an intermediate NTuple via precision_stencil and\npassing it to smoothness_operation, bake the (ψ[i] - ψ̂) subtraction\ndirectly into the metaprogrammed expression for Float32 (or lower)\nprecision. This avoids the ntuple allocation and lets the compiler\nCSE repeated subtractions.\n\nThe low-precision path now gets a distinct smoothness_indicator method\nbody (predicated on FT at code-generation time), while the\nFloat64/BigFloat path is unchanged.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add Float32 WENO smoothness indicator test\n\nVerify that the mean-subtraction fix produces non-negative β values\nand correct WENO weights for Float32 stencils with large mean (~300),\nthe scenario that triggers catastrophic cancellation without the fix.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Bump version from 0.106.6 to 0.106.7\n\n* Update tolerances\n\n* Increase relative tolerance for Float32 comparison\n\n* Retrigger CI\n\n* Retrigger CI\n\n* Retrigger CI\n\n* Retrigger CI\n\n* Set weight_computation=NormalDivision in WENO smoothness test\n\nThe test builds WENO schemes directly and calls biased_weno_weights\nwithout going through materialize_advection, which normally resolves\nthe deferred WCT=Nothing sentinel. Pass NormalDivision explicitly so\nnewton_div dispatches correctly.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* retrigger CI\n\n* retrigger CI\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>",
          "timestamp": "2026-04-17T17:44:50Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/ef504366e1d7abcf524b5aa1a53811182ef5d847"
        },
        "date": 1776456677674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07624135359,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7406115,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.694596,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.330808,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.306904,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.300889,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991609,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5670665,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339743,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64355,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491358,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03220416939,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29869196396,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060797121929999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.0485907648,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10344558585,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28582262907,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03744564098,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060152715280000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11094851383,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09718375518,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08358448514000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08172074598,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08304350316,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07570322933,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08419474272000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07624135359,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07624135359,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07624135359,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07624135359,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07624135359,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07624135359,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e55446f0c0bb97d89d4c60985e51d900d3a443bd",
          "message": "Use DOI URL for Oceananigans JOSS paper (#5519)",
          "timestamp": "2026-04-17T18:09:53Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e55446f0c0bb97d89d4c60985e51d900d3a443bd"
        },
        "date": 1776462481102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07633080843000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.731249,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.686449,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.328279,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.305943,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.299831,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991288,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5669215,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.34099,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643261,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.49139,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03035944437,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29883506783,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05913435115000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04784132629,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10356551074,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28587178327,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03740444676,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.0600809465,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11046479448999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09711091108,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08301104846,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08171567917999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08305020767,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07567015595,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08413117502,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07633080843000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07633080843000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07633080843000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07633080843000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07633080843000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07633080843000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xin Kai Lee",
            "username": "xkykai",
            "email": "xinkai@mit.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e86351d81856dfc8b3f79e1cefc8854f815467ca",
          "message": "Use volume independent residual in `ConjugateGradientPoissonSolver` tolerance calculation (#5021)",
          "timestamp": "2026-04-18T02:49:19Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e86351d81856dfc8b3f79e1cefc8854f815467ca"
        },
        "date": 1776486458838,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07622882627,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.749881,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.686569,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.326002,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.302033,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.294866,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.98882,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.56575,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.342334,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641916,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482301,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03299075148,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29822977713,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06082649195,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04733288182,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10369902937000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28593168095,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03748418568,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060092909910000006,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11017593674000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09716121762,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.0830625538,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08201941619,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08307471412,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07559731215,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08414760791,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07622882627,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07622882627,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07622882627,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07622882627,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07622882627,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07622882627,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "16eb6a0915fdddcf7f2c2bd44a00f2d45a614bc4",
          "message": "Resolve some ambiguities (#5524)\n\n* Test `OrthogonalSphericalShellGrids` has no ambiguities\n\n* Resolve ambiguity in `Utils`\n\n* Resolve `set!` ambiguities in `OutputReaders`",
          "timestamp": "2026-04-19T08:24:04Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/16eb6a0915fdddcf7f2c2bd44a00f2d45a614bc4"
        },
        "date": 1776592959037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07650463792000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7357335,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6948695,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.334287,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.311344,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.303248,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991506,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567109,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340477,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643259,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491388,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.0351848206,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29909810576,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06073812506,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04759484877,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10364815246999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28585672952,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03731640781,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06011576315,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11007963425,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.0971041737,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08315396069,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08168320348,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08307707739999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07567238460999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08442945872999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07650463792000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07650463792000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07650463792000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07650463792000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07650463792000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07650463792000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "127f8bea48064c0eea1809c594f05c89439e94d5",
          "message": "Explicit imports in `Advection` (#5523)\n\n* Explicit imports in `Advection`\n\n* Remove unused local variables\n\n* Remove undeclared import\n\n* Remove more unused variables\n\n* Delete dead code\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\n\n---------\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>",
          "timestamp": "2026-04-20T06:28:56Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/127f8bea48064c0eea1809c594f05c89439e94d5"
        },
        "date": 1776672446383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07627650275,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.745753,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6920085,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.323538,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.299058,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.293074,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.99154,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567446,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.342014,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64342,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491325,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03252529645,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29843954656,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06065616241,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047669767710000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10355342796,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28631309479,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03724841728,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06008466651,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11017461522,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09709941150000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08308894525999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08172789587000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08304716208,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07566649790999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08418591775999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07627650275,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07627650275,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07627650275,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07627650275,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07627650275,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07627650275,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a3fcdc55e9c24047acbaca7754cc4aebd2be9b1e",
          "message": "Only allow CUDA.jl v5 in benchmarking environment (#5531)",
          "timestamp": "2026-04-21T10:15:49Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/a3fcdc55e9c24047acbaca7754cc4aebd2be9b1e"
        },
        "date": 1776772534864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07622239112,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.733929,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6884095,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.332849,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.309457,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.301874,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988756,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.565255,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340286,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641884,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482365,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.034932249990000004,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29865241116,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05989108927,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.0474033029,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.103557604,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28596132724,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.0371799711,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06012173841,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11097905399,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09702360574,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08298730881,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.0817057961,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08306712722000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07563343673,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08417248642000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07622239112,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07622239112,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07622239112,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07622239112,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07622239112,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07622239112,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fd9c79426f76e144041ed57b7ca0625360e629c",
          "message": "Make benchmarks compatible with both CUDA.jl v5 and v6 (#5532)",
          "timestamp": "2026-04-21T13:38:48Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/3fd9c79426f76e144041ed57b7ca0625360e629c"
        },
        "date": 1776791185420,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07620381486,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7392725,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.692409,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.334162,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.309298,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.30197,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991156,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5670465,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.34115,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643483,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491548,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03275215171,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29874922574,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060727477409999994,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047356298260000006,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10358976459000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.2859916917,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03715636693,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06179767513,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11013172732,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09716183259,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08313382759,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08167300732999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08298246609,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07562643974,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08417669581000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07620381486,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07620381486,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07620381486,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07620381486,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07620381486,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07620381486,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "180fcb0945a987824f5eee80805e1c6cc2fd5724",
          "message": "Bump julia-actions/setup-julia from 2 to 3 (#5535)\n\nBumps [julia-actions/setup-julia](https://github.com/julia-actions/setup-julia) from 2 to 3.\n- [Release notes](https://github.com/julia-actions/setup-julia/releases)\n- [Commits](https://github.com/julia-actions/setup-julia/compare/v2...v3)\n\n---\nupdated-dependencies:\n- dependency-name: julia-actions/setup-julia\n  dependency-version: '3'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-23T08:20:44Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/180fcb0945a987824f5eee80805e1c6cc2fd5724"
        },
        "date": 1776938298669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07628610367000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.747627,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.691627,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.332434,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.308147,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.301747,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991317,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.566935,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340638,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643677,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491421,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03034463262,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.2988014074,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060639289639999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047351558530000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10363076988,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28583522840000003,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03716205537,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060093649320000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11010145982,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09703640522000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08305319012,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08164060912,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08308395778,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0756527509,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08418719219,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07628610367000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07628610367000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07628610367000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07628610367000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07628610367000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07628610367000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9f5d63d1682ab610bd02450ed130556609ed152a",
          "message": "Bump actions/upload-artifact from 7.0.0 to 7.0.1 (#5507)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 7.0.0 to 7.0.1.\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/bbbca2ddaa5d8feaa63e36b76fdaad77386f024f...043fb46d1a93c77aae656e7c1c64a875d1fc6a0a)\n\n---\nupdated-dependencies:\n- dependency-name: actions/upload-artifact\n  dependency-version: 7.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-04-24T10:27:59Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/9f5d63d1682ab610bd02450ed130556609ed152a"
        },
        "date": 1777032224575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07620255846,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.745864,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6942005,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.335122,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.310546,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.30549,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991188,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567062,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340574,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643516,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491517,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03109387035,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29881216127,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060789874519999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04733665514,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10361698232,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28578222087,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.039081908969999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06012207935,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11043077275,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09709102278,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08320215942,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08165302674,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08314556091,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0756035799,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08446655532,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07620255846,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07620255846,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07620255846,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07620255846,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07620255846,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07620255846,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ea9dbe31d15ea5d4aac1b1b23eb6ba6d49dc7465",
          "message": "Register atan, atand, mod as binary operations on Fields (#5538)\n\n* Register atan, atand, mod as binary operations on Fields\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Avoid some imports\n\n* Also test `atand`, `atan` and `mod` as binary operations\n\n---------\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>",
          "timestamp": "2026-04-24T15:20:15Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/ea9dbe31d15ea5d4aac1b1b23eb6ba6d49dc7465"
        },
        "date": 1777049989328,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07643142798000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.740602,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.700139,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.332179,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.309395,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.302387,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991317,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5670315,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340478,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643453,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491326,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03023732212,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.2987007945,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060638696650000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.0473167509,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10388367413999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28505215076,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03728847708,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060089608649999994,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11019344909,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09718019382,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08325362878,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08176764747,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08308192715000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07563390073,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08428904143,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07643142798000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07643142798000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07643142798000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07643142798000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07643142798000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07643142798000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Gregory L. Wagner",
            "username": "glwagner",
            "email": "wagner.greg@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5bf814d70051b98ed92f3678439558096cb6133a",
          "message": "Fix formatting in run_benchmarks.jl (#5540)",
          "timestamp": "2026-04-24T17:44:31Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/5bf814d70051b98ed92f3678439558096cb6133a"
        },
        "date": 1777061811054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0762851234,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.738451,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.693091,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.328055,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.306551,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.299511,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991449,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567226,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340255,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643774,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491487,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02851662981,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29859970385,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06071771805,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04728792798,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10370852327999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28599054511,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037429958980000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06015146125,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11021789856,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09720483337,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08298434203999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08166935885999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08304812811,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07567611986,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08429851109,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0762851234,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0762851234,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0762851234,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0762851234,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0762851234,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0762851234,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Julia Sloan",
            "username": "juliasloan25",
            "email": "51397186+juliasloan25@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f06bafc5354c81f3d296680c124326b90c93b26b",
          "message": "(0.107.4) unify Simulation interface in ReactantExt (#5541)\n\n* (0.107.4) unify Simulation interface in ReactantExt\n\n* disallow stop time",
          "timestamp": "2026-04-25T00:38:36Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f06bafc5354c81f3d296680c124326b90c93b26b"
        },
        "date": 1777083271338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07626468087,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.739003,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.692843,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.339593,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.315305,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.307785,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988844,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.565552,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340764,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641722,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482395,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02710573561,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29861405805,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.053912325350000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04735009111,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10350649589,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28494184871,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037096896680000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060094153659999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11022452692,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09710670298,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08304334146,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08169899249,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08306793323999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07570917226,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08417070317,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07626468087,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07626468087,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07626468087,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07626468087,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07626468087,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07626468087,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xin Kai Lee",
            "username": "xkykai",
            "email": "xinkai@mit.edu"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d341f3f73faaa01b3bd48b8381e32e14d1188db1",
          "message": "Fix interpolate! on flat topologies with explicit coordinates (#5522)",
          "timestamp": "2026-04-25T18:51:55Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/d341f3f73faaa01b3bd48b8381e32e14d1188db1"
        },
        "date": 1777148932046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07641638987,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.734659,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6931395,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.342616,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.316984,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.310295,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991193,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567082,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341567,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643453,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491326,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03065706767,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29872017438,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06101932927,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.0476991744,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10359671320000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28589392865,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03847487881,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06013738992999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11022333061999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09712374967000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08309042635000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08169061412999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08308796161,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07601329648,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08421739204999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07641638987,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07641638987,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07641638987,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07641638987,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07641638987,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07641638987,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Taimoor Sohail",
            "username": "taimoorsohail",
            "email": "taimoor.sohail@unimelb.edu.au"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a117831b9c5084a5b5cb802dd90a56686e7786c7",
          "message": "Skip `checkpoint_at_end` when NaN-triggered stop occurs (#5529)\n\n* Skip checkpoint_at_end when NaN-triggered stop occurs\n\n* Fixed parse error in test file\n\n* Reorder imports in run.jl for Oceananigans\n\n* Apply suggestions from code review\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Clarify NaN checker naming and reset API\n\n* Fix reset_nan_checker! import for method extension\n\n---------\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-04-27T04:04:01Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/a117831b9c5084a5b5cb802dd90a56686e7786c7"
        },
        "date": 1777268653954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07634842686,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.737865,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6922335,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.329041,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.307154,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.300498,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991156,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5669345,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341021,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643484,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491325,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03226124617,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29872773383,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06098370709,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047343885759999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10355325444,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28587680073,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03711050966,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06011072562,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11031016728000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09708519925999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08331401975000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08176873022,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08301590967,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07558622147,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.0852954541,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07634842686,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07634842686,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07634842686,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07634842686,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07634842686,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07634842686,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Navid C. Constantinou",
            "username": "navidcy",
            "email": "navidcy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "107057cbde92ee322b91a5bd61563102c0133c7c",
          "message": "Add DOI to oceananigans.bib entry for Burchard and Bolding 2001 article (#5544)",
          "timestamp": "2026-04-27T09:41:57Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/107057cbde92ee322b91a5bd61563102c0133c7c"
        },
        "date": 1777288719087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07625077767999999,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7454105,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.695683,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.335149,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.308046,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.301134,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.98856,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5654595,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341661,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641595,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482588,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03117552778,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29885875937,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05391895427,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.0473498593,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10364071755,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28596735023000003,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03713544403,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06038512863,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11016495403,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09703079911,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08302025209,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08165424886,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08309090639000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07602059569,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08427104231999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07625077767999999,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07625077767999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07625077767999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07625077767999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07625077767999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07625077767999999,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Eliot Quon",
            "username": "ewquon",
            "email": "eliot@aeolus.earth"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e1e1a953a515a24968c524b3828989cd40bf0646",
          "message": "Add hPa constant to Units module (#5533)\n\nAdded hPa constant to clarify quantities with hectopascals or millibars, often used for pressure in atmospheric science",
          "timestamp": "2026-04-27T11:41:46Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e1e1a953a515a24968c524b3828989cd40bf0646"
        },
        "date": 1777295977078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07617282665,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.73913,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.696538,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.326897,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.304083,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.29797,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.99154,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5673185,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340446,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643324,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491549,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02970812758,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29889084576999997,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06081097584,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047347580269999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10353160437,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.2858979098,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03741011695,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06012225415,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11020523372999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09710545118000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08331785992,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08168585279,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08301975509,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07569981275,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08419533452,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07617282665,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07617282665,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07617282665,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07617282665,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07617282665,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07617282665,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Navid C. Constantinou",
            "username": "navidcy",
            "email": "navidcy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a7fc87d01784f580fead853665c87fcb9e34ea7a",
          "message": "Add RK3 paper + fix docstrings for SplitRungeKutta time steppers (#5543)\n\n* add RK3 paper\n\n* make code example\n\n* latex rendering\n\n* Update README.md\n\n* Update index.md\n\n* add ref for RK3 paper\n\n* few tweaks\n\n* better spectral_coefficients docs\n\n* better time_step! docstring\n\n* convert example to repl block\n\n* fix some rendering\n\n* convert repl to doctest\n\n* Update src/TimeSteppers/split_runge_kutta.jl\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\n\n* fix doctest\n\n* don't say that kwargs matter\n\n---------\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>",
          "timestamp": "2026-04-27T18:40:37Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/a7fc87d01784f580fead853665c87fcb9e34ea7a"
        },
        "date": 1777321071510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0761781101,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.737178,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.695867,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.330962,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.30821,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.299507,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991124,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567031,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339582,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643612,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.49126,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03160244281,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29872211834,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06064932756,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04965841254,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10358475334,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28590848836,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037353061150000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06005834143,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11020851920000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.097037221,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08303523605,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08167776602,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08304037709999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07569395901,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08449313105,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0761781101,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0761781101,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0761781101,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0761781101,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0761781101,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0761781101,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Navid C. Constantinou",
            "username": "navidcy",
            "email": "navidcy@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c2a0fc610f98fa8848284eb19d90c50a5152c35c",
          "message": "Avoid redundant call to `compute!` in few examples (#5545)\n\n* no need to call compute! in few examples\n\n* remove reduntant compute!\n\n* empty lines\n\n* fix grammar\n\n* drop unecessary computes\n\n* dont imply compute is necessary\n\n* fix doctests\n\n* fix doctests\n\n* link to output_writers",
          "timestamp": "2026-04-28T03:22:57Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/c2a0fc610f98fa8848284eb19d90c50a5152c35c"
        },
        "date": 1777352347029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07633105318,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.742184,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6923605,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.334386,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.311249,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.303921,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991539,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567046,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340606,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643548,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491293,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03264767932,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29857646576,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05753915138,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047419886169999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10358272924999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28497540904,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.0370679385,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060108569449999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11028905805999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09717712291,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08319707394,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08168337681,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08308203701,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07568986628,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08424615052000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07633105318,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07633105318,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07633105318,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07633105318,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07633105318,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07633105318,
            "unit": "s/timestep"
          }
        ]
      }
    ]
  }
}