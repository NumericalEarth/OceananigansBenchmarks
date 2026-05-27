window.BENCHMARK_DATA = {
  "lastUpdate": 1779921940501,
  "repoUrl": "https://github.com/CliMA/Oceananigans.jl",
  "entries": {
    "Oceananigans.jl Benchmarks": [
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
          "id": "ef001c57745fe19f14d870378cadf188181bc83a",
          "message": "Fix distributed tests: lean project, local CUDA detection, halo BC fix (#5468)\n\n* first fix\n\n* use the local cuda version\n\n* use printf\n\n* add this to the test Project.toml\n\n* try adding also the runtime_jll\n\n* add it in extras\n\n* Use climacommon/2025_05_15 and remove CUDA_Runtime_jll workarounds\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Reintroduce CUDA_Runtime_jll extras and add set_runtime_version! preprocessing step\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove printf preference injection, let CUDA.set_runtime_version! handle it\n\nThe printf was creating a duplicate [preferences.CUDA_Runtime_jll] section\nin test/Project.toml since Preferences.jl also writes one.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Detect local CUDA version from nvcc instead of CUDA.runtime_version()\n\nCUDA.runtime_version() returns the JLL version (12.8.0), not the actual\nlocal toolkit version (12.9.0). Parse nvcc --version to get the real one.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Use nvidia-smi to detect local CUDA version (nvcc not in PATH)\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add lean ProjectDistributed.toml and detect CUDA version from bash\n\n- Create test/ProjectDistributed.toml without heavy deps (XESMF, Reactant,\n  Makie, Enzyme, NCDatasets, Metal, oneAPI, AMDGPU) and with CUDA_Runtime_jll\n  as a proper dependency\n- Pipeline swaps it in with mv before running tests\n- Detect CUDA version from nvidia-smi and write LocalPreferences.toml directly\n  from bash, avoiding a second Julia startup\n- Remove CUDA_Runtime_jll [extras] from generic test/Project.toml\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Widen CUDA_Runtime_jll compat to match CUDA.jl 5.8+\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove unnecessary CUDA_Runtime_jll compat\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix CUDA version parsing from nvidia-smi with grep -oP\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Hardcode CUDA 12.9 in LocalPreferences.toml\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Wrap optional GPU backend imports in try/catch in test_init.jl\n\nMetal, AMDGPU, and oneAPI are not in ProjectDistributed.toml since they\nare not needed for distributed testing.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove Metal/AMDGPU/oneAPI from test_init.jl\n\nThese are already imported in their respective test files (test_metal.jl,\ntest_amdgpu.jl, test_oneapi.jl).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add NCDatasets to ProjectDistributed.toml for regression tests\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Revert to climacommon/2025_07_30 to fix MPI segfault\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add MPIPreferences binary = system to fix MPI segfault\n\nThe segfault in libmpiwrapper.so was caused by MPI.jl using the JLL\nartifact while srun launches with system MPI.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* disable GPU tests\n\n* try the new pipeline\n\n* restart CI\n\n* don't need a synchronized_arch\n\n* add cpu_arch\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-29T08:17:25Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/ef001c57745fe19f14d870378cadf188181bc83a"
        },
        "date": 1777456686129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07624746384,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7492895,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.6986655,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.331793,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.308114,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.301874,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.99138,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567414,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340478,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643644,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491357,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03358940028,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29876906076,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.0607146837,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04733054132,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10361897392,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28591261396,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03710338145,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060095528710000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11016700274999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09716245939,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08310077544,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08188452932000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08308035294999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07562653762,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08424453998,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07624746384,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07624746384,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07624746384,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07624746384,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07624746384,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07624746384,
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
          "id": "f85acfea0a4f80bae2d3469ba7473536affd5d55",
          "message": "Increment benchmarking commit history (#5550)\n\n* fo ahead\n\n* restart CI",
          "timestamp": "2026-04-29T10:03:40Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f85acfea0a4f80bae2d3469ba7473536affd5d55"
        },
        "date": 1777462852069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07623491647,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.743768,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.692664,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.338482,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.31365,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.306706,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988691,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5656225,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341054,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64214,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482397,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.029452339379999998,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29867160788,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060668760839999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047488051120000006,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10360444321,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.2860620713,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037284782679999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06011951988,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.1110039759,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09717687563,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08313674062000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08190580616,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08307316687,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07575343439,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08445075876000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07623491647,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07623491647,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07623491647,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07623491647,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07623491647,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07623491647,
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
          "id": "fa51bbc9bd35cc2643f44b6dd87a89d96b69e195",
          "message": "(0.107.5) Bugfix `with_tracers` for `IsopycnalSkewSymmetricDiffusivity` (#5552)\n\n* fix required halos size\n\n* add a small test\n\n* bump minor version\n\n* Remove extra blank line in test_diffusion_stencils.jl",
          "timestamp": "2026-04-29T15:32:36Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/fa51bbc9bd35cc2643f44b6dd87a89d96b69e195"
        },
        "date": 1777538396404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07625478101,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.738186,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7021865,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.337161,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.313033,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.307625,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.99118,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5669605,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340701,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643482,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491323,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02861234311,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29871732527,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060772552070000006,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04729753002,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10354337346999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28596126245000003,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03722456062,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06010501776,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11034931993000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09711153717,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08314297398,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.0816727277,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08327942850999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0759680959,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08420999968000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07625478101,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07625478101,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07625478101,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07625478101,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07625478101,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07625478101,
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
          "id": "363f5d63fdde78c1cffbfcca36ff073ef7925f2b",
          "message": "Extend `Field` methods to `NamedFieldTuple` (#5546)\n\n* Add similar/set!/norm/dot for NamedFieldTuple\n\nExtend the existing NamedFieldTuple alias (NamedTuple of Fields) with\nthe obvious vector-space operations:\n\n- Base.similar(::NamedFieldTuple) allocates an empty NT of like Fields.\n- set!(::NamedFieldTuple, ::Number) scalar-fills every field.\n- set!(dst::NamedFieldTuple, src::NamedFieldTuple) copies field-wise.\n- LinearAlgebra.norm(::NamedFieldTuple) returns the block 2-norm.\n- LinearAlgebra.dot(::NamedFieldTuple, ::NamedFieldTuple) sums per-field dots.\n\nThe kwargs set!(::NamedTuple; kwargs...) used by model initialization is\nunchanged.\n\n* Addressed variable naming convention\n\n* Update src/Fields/set!.jl\n\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\n\n* Move NamedFieldTuple alias and methods to field_tuples.jl\n\nPer review: similar/norm/dot for NamedFieldTuple belong with the\ntuple type rather than in show_fields.jl. Base.show stays put.\n\n---------\n\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>",
          "timestamp": "2026-04-30T23:17:54Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/363f5d63fdde78c1cffbfcca36ff073ef7925f2b"
        },
        "date": 1777597133565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07635613381,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7379175,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7050855,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.334901,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.30994,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.302037,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988726,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5659605,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341022,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641564,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482334,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03782764654,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29907479476,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060815236519999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04739045812,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10363638895999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28578808062,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03750323882,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060115690500000006,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11012555229,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09722443109000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08306130851,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08174833103,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0832206714,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07572482341,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08437389001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07635613381,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07635613381,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07635613381,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07635613381,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07635613381,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07635613381,
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
          "id": "9584de073d05db5d0dfd4166e8e5f9084365241d",
          "message": "Pin CUDA.jl to v6.0 in tests (#5555)",
          "timestamp": "2026-05-01T11:59:01Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/9584de073d05db5d0dfd4166e8e5f9084365241d"
        },
        "date": 1777642727147,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0764313458,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.742343,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7080395,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.334097,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.311248,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.302129,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.991027,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.566854,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340573,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642843,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491421,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03027085149,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29899894544,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06083978056,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04742551957,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10363222201,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28571114308,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.0371191561,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06007039437,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11008561848,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09730313815000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.0831883393,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08195492340999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08314980495,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07570772652999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08425730591000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0764313458,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0764313458,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0764313458,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0764313458,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0764313458,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0764313458,
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
          "id": "14afe70501e4acd6bc7e1407d9d4c2603ab7b3fe",
          "message": "Revise citations in boussinesq.md (#5558)\n\n* Revise citations in boussinesq.md\n\nUpdated citations in the Boussinesq approximation section for clarity and consistency.\n\n* Fix minor grammatical issue in Boussinesq documentation\n\nAdded 'the' before 'book' for clarity.",
          "timestamp": "2026-05-03T12:22:55Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/14afe70501e4acd6bc7e1407d9d4c2603ab7b3fe"
        },
        "date": 1777816806535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07640017065,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.750873,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7048255,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.335922,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.312786,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.304306,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.990547,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5673985,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341406,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642748,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491485,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03243788819,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29906778414,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06104011495,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04738424486000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10353473094,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28574735633,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03718123703,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06007925084,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11008182509999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09731940501,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08307712033999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08174131261999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08309078490999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07579354069,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08434343043,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07640017065,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07640017065,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07640017065,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07640017065,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07640017065,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07640017065,
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
          "id": "9b5766c345178a6ffe3b0634354f09a6476ad08b",
          "message": "fix latex rendering (#5557)",
          "timestamp": "2026-05-04T03:32:01Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/9b5766c345178a6ffe3b0634354f09a6476ad08b"
        },
        "date": 1777871324245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07629111069,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.747448,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.702168,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.336688,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.310481,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.303825,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.990643,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.566742,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341342,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642875,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491453,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03129180005,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29898709444,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.052518314569999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04743834974,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10348926136999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28575889547,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03716722854,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06020248332000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11007871466,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09733683164000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08479826018,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08176729562,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08316056979000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07599514999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08427168624,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07629111069,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07629111069,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07629111069,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07629111069,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07629111069,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07629111069,
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
          "id": "f3ff2afe198d4bd70c4c9f035a4f077279397211",
          "message": "Allow `AveragedTimeInterval` with a `Dates` clock (#5562)\n\n* add the test\n\n* bump project\n\n* fix whitespace\n\n* use Dates.AbstractDateTime\n\n* fix the tests\n\n* do not tick with Period",
          "timestamp": "2026-05-04T19:47:26Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f3ff2afe198d4bd70c4c9f035a4f077279397211"
        },
        "date": 1777929905330,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07655875945,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7460045,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.706357,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.340366,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.318863,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.310639,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988626,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5657965,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.342174,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641243,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482333,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.029042136580000003,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29867338409,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.061252943010000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047354236790000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10368240447,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28557708959,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03743744184,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06010216582,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11081120276,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09715087383,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08327430939,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08174425854,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08302997267000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07577171667,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08435314346,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07655875945,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07655875945,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07655875945,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07655875945,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07655875945,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07655875945,
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
          "id": "e2d8678334887d0eacf59959d03f92d6a2dce2e3",
          "message": "Remove duplicate paper reference from index (#5563)",
          "timestamp": "2026-05-04T20:20:37Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e2d8678334887d0eacf59959d03f92d6a2dce2e3"
        },
        "date": 1777935655138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07647047424,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.743096,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.705944,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.327056,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.304881,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.297298,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.990483,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.567142,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340734,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642844,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491453,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02930219013,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.299124331,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06078848356,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04764919367,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10347900841999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28576467944,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03714366208,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06008857378,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11008031579000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09728062922,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08319150024000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08174545590999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08316123655,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07579772897999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08433722986999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07647047424,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07647047424,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07647047424,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07647047424,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07647047424,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07647047424,
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
          "id": "749d80693425557fdb7b518525f893af47589ac0",
          "message": "Fix typos in boundary_condition.jl documentation (#5553)\n\n* Fix typos in boundary_condition.jl documentation\n\n* ignore linkcheck for clima.caltech.edu\n\n* chmod\n\n* align",
          "timestamp": "2026-05-04T20:27:38Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/749d80693425557fdb7b518525f893af47589ac0"
        },
        "date": 1777941574268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07666909223,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.742889,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7037535,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.33701,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.314193,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.305521,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.990868,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.56719,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340958,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642652,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491293,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03068663993,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29899263121,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06087969149,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04740844488,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10354484228000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28561493166999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03712926637,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06013224375,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11004509113,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09724663173999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08297402777,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08194632034999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08307361435,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07589875018,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08423627255999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07666909223,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07666909223,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07666909223,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07666909223,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07666909223,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07666909223,
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
          "id": "f27615dc7a01bbe56b441d79b8148ae15608c3a0",
          "message": "Append distributed rank suffix to checkpointer filenames (#5561)\n\n* Append distributed rank suffix to checkpointer filenames\n\n* Convert chopped checkpoint prefix to String",
          "timestamp": "2026-05-05T00:14:30Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f27615dc7a01bbe56b441d79b8148ae15608c3a0"
        },
        "date": 1777953113222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07623301228,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7500085,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7045685,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.326386,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.30277,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.297938,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.990836,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.566934,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.34115,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64262,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.491453,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02903632532,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29919721895,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.0610570342,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04740604483,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10388835785,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.285730908,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03729317705,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.060108692670000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11077851585,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09735229097999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08311557674999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08181472543,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08307132857999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07577286788,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08452767114,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07623301228,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07623301228,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07623301228,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07623301228,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07623301228,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07623301228,
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
          "id": "636f88572a20cfcb036b74532f91f42d7cf9a7e9",
          "message": "Fix show(field) + zipper BC validation for (distributed) tripolar grids (#5489)\n\n* Fix `show(field)` crash on 2x2 distributed tripolar grids\n\n`show` calls `maximum` which creates a reduced Field with (Nothing, Nothing, Nothing)\nlocation. On pencil-decomposed (Rx > 1) tripolar grids, the Field constructor injected\na DistributedZipper north BC for this reduced field, then `communication_buffers` called\n`has_fold_line(TY, Nothing)` which had no method.\n\nTwo fixes, matching the existing pattern from distributed LatitudeLongitudeGrid:\n1. `default_auxiliary_bc` returns `nothing` for Nothing y-location on tripolar grids\n2. The MPI tripolar Field constructor respects `nothing` north BCs instead of\n   overriding them with a zipper\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Refactor distributed tripolar `Field` constructor to use multiple dispatch\n\nReplace if/else branching with dispatch on y-topology (`OneDFoldTopology` /\n`TwoDFoldTopology`) and incoming north BC. Extract `zipper_sign`, `with_north_bc`,\nand a tripolar-specific `inject_halo_communication_boundary_conditions`.\n\nBehavior is preserved across serial, slab, and pencil partitions (verified\nwith MWE — see #5503).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Enforce zipper north BC on tripolar grids (#5503)\n\nValidates that the north boundary of a (folded-y) tripolar grid is a\nZipper / distributed communication BC / nothing, both at Field construction\nand at the top of tripolar regularize_field_boundary_conditions. Drops the\nnow-dead location-based `sign(LX, LY)` fallback and simplifies `zipper_sign`.\n\n- Adds `FoldedTopology` union in Grids and the matching\n  `validate_boundary_condition_topology` methods (mirroring the Periodic\n  pattern), guarded on `side == :north`.\n- Accepts `DefaultBoundaryCondition` placeholders at the regularize-entry\n  validate so the model construction path isn't rejected before\n  placeholders resolve.\n- Passes `boundary_conditions = nothing` on the internal metric helper\n  Fields inside the `TripolarGrid` constructor so their default BCs\n  (NoFlux / Impenetrable on folded y) don't trip the new validator.\n- Documents the sign convention on `UPivot/FPivotZipperBoundaryCondition`\n  and adds a `!!! info \"North boundary condition\"` admonition to\n  `TripolarGrid`'s docstring.\n- Adds serial + distributed tests covering validation (TESTSET 4 in\n  gadi_test_env, plus test/test_tripolar_grid.jl).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Alt B: conditional north-BC override in tripolar regularize + dispatch cleanup\n\nRegularize no longer clobbers user-supplied north BCs. It only fills the\ndefault Zipper when the north slot holds a `DefaultBoundaryCondition`\nplaceholder (the model-construction path). A user-supplied north BC flows\nthrough untouched; invalid BCs are then caught downstream by Field's\n`validate_boundary_condition_topology` (the Periodic-style check). This\nremoves the need to validate at regularize entry and to accept\n`DefaultBoundaryCondition` in the FoldedTopology validator.\n\n- Replace the regularize-entry validate call + unconditional override with\n  7-arg `regularize_boundary_condition` overloads that pass `sign` through\n  and dispatch on BC type × grid y-topology. `DefaultBC` + fold-north\n  yields the right Zipper/DistributedZipper; user BCs pass through.\n- Refactor the fold-topology unions into a four-way split that matches\n  how each case is dispatched:\n    SerialFoldedTopology       — serial tripolar\n    SlabFoldedTopology         — distributed slab fold-north (Rx=1)\n    PencilFoldedTopology       — distributed pencil fold-north (Rx>1)\n    DistributedFoldedTopology  — Slab ∪ Pencil\n    FoldedTopology             — Serial ∪ Distributed (used for north-BC validation)\n  All live in `Grids/grid_utils.jl` and are exported. The previously\n  duplicate `DistributedFoldTopology` in `field_boundary_conditions.jl`\n  is deleted in favor of the shared `DistributedFoldedTopology`.\n- Add short dispatch aliases (`SerialFTG`, `SlabFTG`, `PencilFTG`,\n  `DistFTG`) to keep method signatures readable.\n- Update `north_zipper_bc` and `distributed_zipper.jl` dispatch to use\n  the renamed unions (`SlabFoldedTopology`, `DistributedPencilFoldedTopology`\n  → `PencilFoldedTopology`).\n- Update the test so it only exercises Field's validation path (Alt B\n  design: regularize deliberately doesn't throw on bad input).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\n\n* Apply remaining suggestions from code review\n\nFinish the SlabFTG/PencilFTG/DistFTG/SerialFTG → *TRG rename in dispatch\nsites that were missed when the const definitions were renamed, and drop\nthe UPivot/FPivot zipper BC docstrings (the constructor style here is\ndocstring-free, matching the other BC constructors in this file).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix `new_data` import and drop stale `.data` accessors in tripolar_grid.jl\n\nThe `new_data` switch in 886e673d2 missed the import (CI hit\n`UndefVarError: new_data` on Reactant tests) and left `.data` accessors\nthat worked on `Field` but not on the raw `OffsetArray` that `new_data`\nreturns. Add `new_data` to the `Oceananigans.Grids` import block, and\ndrop `.data` from the eight `dropdims(λXX.data, dims=3)` calls.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Allocate tripolar coord buffers on CPU (matches CPU kernel launch)\n\nThe previous helper-`Field` path always allocated on CPU because the\nhelper `RectilinearGrid` was constructed without an `arch` argument\n(defaulting to CPU). The kernel `_compute_tripolar_coordinates!` is\nlaunched on `CPU()` and reads/writes CPU coordinate arrays\n(`λᶠᵃᵃ`, `φᵃᶜᵃ`, …). Restoring `CPU()` on `new_data` matches that\nbehavior and fixes a scalar-indexing failure on GPU.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Retrigger CI and docs build\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>",
          "timestamp": "2026-05-05T04:30:54Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/636f88572a20cfcb036b74532f91f42d7cf9a7e9"
        },
        "date": 1777961331017,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07630903839,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.7432725,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.701177,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.336689,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.312434,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.30437,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988372,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.565542,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341085,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64102,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.482429,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.029689187920000002,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.29917500608,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06083858445,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.047437647070000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10370216917000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28572451861000003,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03705339498,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06005129375,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11009067816,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09716951703,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08313973167000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08185239244,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.083179752,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.07578418711,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08422774488,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07630903839,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07630903839,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07630903839,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07630903839,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07630903839,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07630903839,
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
          "id": "05c263e5950c544741d01d1add60b9f5d20dc17e",
          "message": "Temporarily use older versions of Reactant and GPUCompiler (#5566)",
          "timestamp": "2026-05-07T07:58:23Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/05c263e5950c544741d01d1add60b9f5d20dc17e"
        },
        "date": 1778146581421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.07636172073,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.739032,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.699737,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.340242,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.315345,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.308242,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.985364,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.597238,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338142,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643419,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.479837,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03262198871,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.2985253783,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06068936627,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04742937586,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.10372261265,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.28641758194,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037067494640000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06038828692,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.11007424135999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.09721420865000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08307064956,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08175308805,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08311178108,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0758080624,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.08424205562999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.07636172073,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.07636172073,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.07636172073,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.07636172073,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.07636172073,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.07636172073,
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
          "id": "638a259e2e362139473a436a30c6241402830815",
          "message": "Reinstate enum bias (#5318) with sharding tests enabled (#5450)\n\n* Revert \"Revert \"Switch biases to be enums rather than distinct types. (#5318)\"\"\n\nThis reverts commit 7da56015a19ce0cad13a219cabb80f0046d55ecb.\n\n* Re-enable sharding tests in CI\n\nThe enum bias change (#5318) commented out the sharding_tests CI job.\nThis re-enables them so that Reactant compatibility is tested.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* [CI] Run sharding tests on aarch64-linux\n\n* Revert \"[CI] Run sharding tests on aarch64-linux\"\n\nThis reverts commit 8626bd9e81dca79ebdd3a4cbf14d48df235369ab.\n\n* Use WENO order 5 momentum advection in sharding tests\n\n* Temporarily use older versions of Reactant and GPUCompiler\n\n* Don't allow constructing `HydrostaticFreeSurfaceModel` with sharding and with WENO3 advection\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\nCo-authored-by: jackdfranklin <144433437+jackdfranklin@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-07T17:54:04Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/638a259e2e362139473a436a30c6241402830815"
        },
        "date": 1778183177508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05616289093,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.455025,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.172403,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.985396,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5974465,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.985882,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979418,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.976954,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339198,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.644124,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.479485,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03267321044,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21478029972,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.05003346026,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03204690535,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07927050424,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25983909046000003,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03712881063,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04977107711999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07535427502,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07007857257,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.060830043060000005,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06298347934,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05742637497,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05410123433,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.06007751568,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05616289093,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05616289093,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05616289093,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05616289093,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05616289093,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05616289093,
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
          "id": "dedf5cd7af0838e14d9460f99d7ede8e305768bf",
          "message": "Set `JULIA_CUDA_USE_COMPAT=false` in tests (#5577)\n\n* Add `CUDA_Runtime_jll` to extras of test environment\n\nThis allows us to make preferences relative to this package effective.\n\n* [CI] Use CUDA toolkit v12\n\nThis is compatible with the GPUs used on CI.\n\n* Add `CUDA_Runtime_jll` to `extras` of `docs` environment as well\n\n---------\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-15T02:15:28Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/dedf5cd7af0838e14d9460f99d7ede8e305768bf"
        },
        "date": 1778816937137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05615646409,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.455042,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.172019,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.985172,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.596919,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.98569,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979258,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.97705,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33843,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643836,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.479581,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03222198993,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21477534586000002,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.044390833580000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03202289739,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07907319097,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25917636776999997,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03722551021,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04975310271,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.0749179968,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07011371999999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.060859154670000006,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06263168094,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05743202495,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05413975492,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05978641138,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05615646409,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05615646409,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05615646409,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05615646409,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05615646409,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05615646409,
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
          "id": "89a94322ceaeb9de3f7dc1b5741d54a049230857",
          "message": "Bugfix `actuations` for `TimeInterval` (#5572)\n\n* fix\n\n* add tests\n\n* remove weird comment\n\n* remove whitespace\n\n* fix the case of vector actuations",
          "timestamp": "2026-05-15T08:19:59Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/89a94322ceaeb9de3f7dc1b5741d54a049230857"
        },
        "date": 1778839019386,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05608861121,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4551205,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.17237,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.985204,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.596838,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.985658,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979194,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.976889,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339358,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643836,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.479517,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02971075323,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21478297586,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04426931299,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03209265352,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07911128707,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25988501321,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03734820849,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.049655091379999995,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07491183285,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07010354251,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.060832841990000004,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06278873957,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057415447019999996,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0541884625,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05986750155,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05608861121,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05608861121,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05608861121,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05608861121,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05608861121,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05608861121,
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
          "id": "37dc06b7f1cb1fb0dd202a93a356f4e5929d3018",
          "message": "Disambiguate `FractionalIndices` (#5585)\n\n* disambiguate\n\n* add a test",
          "timestamp": "2026-05-15T14:07:07Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/37dc06b7f1cb1fb0dd202a93a356f4e5929d3018"
        },
        "date": 1778859797370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05598342528,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4562565,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.1721625,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.983828,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.594838,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984602,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979322,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.97721,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339389,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.644924,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.481725,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03391250704,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21491249265,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.0445338631,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03229073237,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07958095325999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25991360480000003,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03728794379,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04966016465,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07490428899,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07009803404,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.060846452700000005,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.0625643132,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057425801129999995,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054134565940000004,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.060119526160000006,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05598342528,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05598342528,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05598342528,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05598342528,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05598342528,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05598342528,
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
          "id": "15a08d7bd05bd698696f7e7b33aae6fb5fd02f49",
          "message": "Change behavior for halo metrics for a `TripolarGrid` + bugfix at `j == 1` (#5565)\n\n* fix continue south\n\n* fix whitespace issue\n\n* explicitly pass the halos\n\n* Update tripolar_grid.jl",
          "timestamp": "2026-05-15T14:08:19Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/15a08d7bd05bd698696f7e7b33aae6fb5fd02f49"
        },
        "date": 1778865510118,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05618078881,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.45541,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.1719555,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.983861,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.594631,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984283,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978874,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.97705,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33827,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.644797,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.481661,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.0332620776,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21478807214,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.044480665249999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03217062852,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07924695086,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25928295439,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03739482181,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04965685778,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07493721903,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07009353519,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06256656341,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06255392091,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0574269671,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054221833840000004,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05982537082,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05618078881,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05618078881,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05618078881,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05618078881,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05618078881,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05618078881,
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
          "id": "a747ce89294d8bfa88899ca9bda8bb40df652fd0",
          "message": "Remove xesmf extension (#5590)\n\n* remove xesmf\n\n* remove from pipeline\n\n* this should cover it\n\n---------\n\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-05-15T14:42:39Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/a747ce89294d8bfa88899ca9bda8bb40df652fd0"
        },
        "date": 1778871238485,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05614327346,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4560485,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.1715545,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.985523,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.597302,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.98569,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978969,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.976571,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339358,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643676,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.479678,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03139885162,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21494650954,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04451001416000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03232244258,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07948487645,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25995749686,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.0373404345,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04965760376,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07502503763,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07006949855,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06083636533,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06257714240000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05744075901,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05413593358,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059847742989999994,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05614327346,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05614327346,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05614327346,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05614327346,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05614327346,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05614327346,
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
          "id": "ec6ed13aac208a983412f83ca4b8ec5871228e0e",
          "message": "Avoid deprecation warning about `CUFFT` in `CUDA` extension (#5597)",
          "timestamp": "2026-05-15T22:04:16Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/ec6ed13aac208a983412f83ca4b8ec5871228e0e"
        },
        "date": 1778888416687,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05594923441,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.456513,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.1713625,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.984244,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5944385,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984506,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979034,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.976826,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338686,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.644285,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.481756,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02868151156,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21488688277,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04580820279,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03201915497,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07959972824,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25987418341,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03733271294,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.049683410610000006,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07504025564,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07008967494,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06110629151,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06255976945,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05743431469,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054138891349999996,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05986926531,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05594923441,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05594923441,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05594923441,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05594923441,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05594923441,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05594923441,
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
          "id": "f3574aa91ca66e82f9ade63ba51115923e857c24",
          "message": "Size BatchedTridiagonalSolver scratch by worksize, fixing OOB on RightFaceFolded tripolar grids (#5594)\n\n* Size BatchedTridiagonalSolver scratch by worksize, not (Nx, Ny, Nz)\n\nOn grids whose `worksize` exceeds the interior size in any dimension —\nnotably `RightFaceFolded` tripolar grids whose `Utils.worksize` is\n`(Nx, Ny+1, Nz)` — the previous (Nx, Ny, Nz) scratch lets the tridiagonal\nkernel write `t[i, Ny+1, k]` out of bounds. Under Julia's column-major\nlayout this byte aliases `t[i, 1, k+1]`, corrupting the j=1 column's\nback-substitution slot. On a sequential CPU launch the columns are\nprocessed end-to-end so the OOB write never races with the j=1 read;\non a parallel GPU launch they race, producing a deterministic\ncontamination at the first interior row of the rank whose j=Ny+1\nholds the most divergent value — i.e. the northernmost rank of a 1xN\ndistributed tripolar partition, where j=Ny+1 holds the fold halo κ\nrather than a smooth neighbour-rank κ.\n\nFor non-RFTRG grids `worksize(grid) == size(grid)` so this is a no-op.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* remove comment\n\n* bump project\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-16T07:58:45Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f3574aa91ca66e82f9ade63ba51115923e857c24"
        },
        "date": 1778924056689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0558849648,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4570725,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.17205,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.984468,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.594598,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984313,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979258,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.976954,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339293,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64438,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.481757,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.031394311859999996,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21480210970000002,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04458846363,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.032221509089999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07929241642,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.2591673134,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03709545689,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04962410087,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07504837475000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07010080593,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06303020804,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06255028508999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05741472644,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05412161122,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059818068870000005,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0558849648,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0558849648,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0558849648,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0558849648,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0558849648,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0558849648,
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
          "id": "b1cf9c9f789b76dc2b36a372999421195c913ba9",
          "message": "Recursively test for type piracy with Aqua (#5602)",
          "timestamp": "2026-05-18T12:08:27Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/b1cf9c9f789b76dc2b36a372999421195c913ba9"
        },
        "date": 1779111818804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.056035663529999995,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.456144,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.172402,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.985524,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.597526,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.985722,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979226,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.976954,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339198,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64406,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.479581,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03044265577,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21551221618,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04432741209,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03205767259,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07923809343,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25970240716,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03721682376,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04987314927,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07543434999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07009035976,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.061047155330000005,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06263780576,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057446556309999994,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05411138612,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059818843270000005,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.056035663529999995,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.056035663529999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.056035663529999995,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.056035663529999995,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.056035663529999995,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.056035663529999995,
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
          "id": "686cd7171514563827f2edd75804f226bf4b388f",
          "message": "Update number of ambiguities in tests (#5603)",
          "timestamp": "2026-05-18T12:23:09Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/686cd7171514563827f2edd75804f226bf4b388f"
        },
        "date": 1779117449902,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05585177967,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.455761,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.172099,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.985364,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5974465,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.985434,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979098,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.976762,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339454,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643804,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.479549,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02830167552,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21478581242,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04947027598,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03205336111,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07923575824000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25972438562,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03706877814,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.049660225679999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07508232752999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07008799305,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06086258849,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06261656077,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05744208738,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05410019913,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05982514514,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05585177967,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05585177967,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05585177967,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05585177967,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05585177967,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05585177967,
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
          "id": "b7b0ffa6e16acf3bcdb2595e5b57d1e5ae6d112b",
          "message": "Share open-boundary transport machinery across models (#5569)\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-18T19:08:12Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/b7b0ffa6e16acf3bcdb2595e5b57d1e5ae6d112b"
        },
        "date": 1779137201234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05610521055999999,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.455953,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.172019,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.985235,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.597302,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.98569,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979066,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.976794,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338206,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643675,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.479613,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03285516052,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21477164486,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.044205378919999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03205635032,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07923674299,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25981696711,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.0371786632,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04967326904,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.075414793,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07019454439,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.0608150027,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06262895615,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057430599400000004,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054106647079999994,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.06003009284,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05610521055999999,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05610521055999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05610521055999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05610521055999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05610521055999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05610521055999999,
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
          "id": "77ec808aed9cfe878fb1c7c0c940ed70b92efbbb",
          "message": "(v0.108.0) Always use user-defined `∆t` on `pickup` (#5588)\n\n* Always prefer user-defined stop_time and checkpointinterval\n\n* Remove pickup actuation realignment\n\n* Do not checkpoint simulation Δt\n\n* Bump version\n\n---------\n\nCo-authored-by: Taimoor Sohail <tsohail@spartan-bm130.hpc.unimelb.edu.au>\nCo-authored-by: Taimoor Sohail <tsohail@spartan-bm131.hpc.unimelb.edu.au>",
          "timestamp": "2026-05-19T11:20:58Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/77ec808aed9cfe878fb1c7c0c940ed70b92efbbb"
        },
        "date": 1779195588938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.056084528269999996,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4560665,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.17138,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.985685,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.597495,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.985466,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979066,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.976538,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339198,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.643836,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.479645,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.031710783220000004,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21480017116,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.044500525160000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.032020640249999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07934715004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25905696814,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03711264677,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04966466984,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07504360923,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07020915045,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06085212023,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06257806323,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05745901228,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0541779982,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059832739110000005,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.056084528269999996,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.056084528269999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.056084528269999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.056084528269999996,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.056084528269999996,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.056084528269999996,
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
          "id": "0a60f2a094266a44cd6728d6510ea11b38a44792",
          "message": "Support `FieldTimeSeries` targets in `Relaxation` (#5575)\n\n* Support `FieldTimeSeries` targets in `Relaxation`\n\nAdds a discrete-form materialization path for `Relaxation(target=fts)`:\n`materialize_forcing` wraps the FTS in an internal `FieldTimeSeriesTarget`\nthat carries the simulation-side location and the integer index of the\nforced field in `model_fields`. The new kernel callable\n(`Relaxation{R,M,<:FieldTimeSeriesTarget}`) reads `ϕ` from\n`model_fields[index][i,j,k]` and obtains the reference value via\n`interpolate(X, Time(t), fts, ...)`, so the FTS can live on a different\ngrid than the simulation as long as its extent brackets the simulation\ngrid in x, y, and z. Mismatch throws `ArgumentError` at materialize time.\n\nThe existing callable / `Number` `target` path is untouched.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Test `Relaxation` with `FieldTimeSeries` target\n\nMaterialization wires the FTS into a `FieldTimeSeriesTarget` with the\nforced field's location and the right `model_fields` index; analytical\nconvergence after one Euler step matches `c_ref·(1 − exp(−Δt/τ))` to\n~1e-6 relative error; smaller-FTS extent throws `ArgumentError`.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Document `Relaxation` with `FieldTimeSeries` target\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Follow underscore convention\n\n* Cleanup\n\n* Drop .0s\n\n* Test cross-grid + temporal FTS interp; tighten extent validator\n\nAdds two testsets to `test_forcings.jl` exercising the FTS-target\n`Relaxation` interpolation paths separately:\n\n- Cross-grid spatial interp: coarse 8×8×4 FTS (padded extent so\n  FTS Centers bracket sim Centers) driving a fine 32×32×4 sim\n  against a time-invariant linear-in-x target. Asserts interior\n  cells stay zero (mask = 0) and fringe cells match the one-step\n  exponential ODE solution to `rtol = 1e-3`.\n- Temporal interp: matched grids, spatially-uniform linear-in-time\n  target, multi-substep RK3. Asserts each fringe cell matches the\n  analytic linear-driver ODE solution\n  `c(t) = t − τ_eff + τ_eff · exp(−t/τ_eff)`.\n\nTwo new helpers (`spatial_test_fts`, `temporal_test_fts`) build\nFTS snapshots from analytic functions and call `fill_halo_regions!`\nafter `set!` as a defensive measure.\n\nTightens `validate_fts_target_extent` to use `instantiated_location`\nfor both the FTS and the forced field instead of hardcoded `Face()`\non both sides. The original `Face()` check was too lax: with a\ncoarser FTS than the sim (the reanalysis-driving-LES use case),\nsim boundary cells could fall outside the FTS *Center* coverage\nand the trilinear lookup would silently read zero-initialized FTS\nhalos, producing wrong values without throwing. The new check\ncatches this at materialize time.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix doctest and unused import in Forcings/relaxation.jl\n\nTwo unrelated CI failures from PR #5575 caused by the merge from main:\n\n- `bottom_sponge_layer` doctest expected integer-literal output (`(z + 100)^2`,\n  `25^2`, `20 + 0.001 * z`) but the runtime prints float-promoted forms\n  (`100.0`, `25.0`, `20.0`). Main had already updated the expected output;\n  the merge from main into this branch resolved the conflict by keeping the\n  stale \"ours\" version. Bringing the expected output back in line with main.\n\n- The `Face` import from Oceananigans.Grids became unused after\n  `validate_fts_target_extent` was tightened from `Face()`-bracket to\n  location-aware bracket checking. ExplicitImports' `check_no_stale_explicit_imports`\n  flagged this in `test_quality_assurance.jl`, causing `cpu-unit-tests` and\n  `gpu-unit-tests` to fail.\n\nVerified locally: `doctest(nothing, [Oceananigans.Forcings])` and\n`include(\"test/test_quality_assurance.jl\")` both pass.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add Adapt methods for Relaxation and FieldTimeSeriesTarget\n\nGPU kernel compilation fails with \"KernelError: passing non-bitstype\nargument\" when an FTS-target `Relaxation` is launched: the kernel\nreceives the host-side `Relaxation` struct unchanged, which contains a\nnested `FieldTimeSeries` whose `.data.parent` is a `CuArray`. `CuArray`\ncarries reference-counting state (`GPUArrays.DataRef`, `RefCounted`,\n`Atomic`, finalizer) that is not isbits.\n\nAdapt.jl's default for an unannotated type is to return the value\nunchanged. Adding explicit `Adapt.adapt_structure` for `Relaxation` and\n`FieldTimeSeriesTarget` routes the adapt recursion through the inner\n`FieldTimeSeries`, which has its own adapt method that converts\n`CuArray` to `CuDeviceArray` (and switches the type to\n`GPUAdaptedFieldTimeSeries`). The kernel then receives an isbits\nargument.\n\nDiagnosed from a user-supplied reproducer on a CUDA GPU:\n\n    grid = RectilinearGrid(GPU(), Float64; size=(2,2,4), extent=(100,100,1000))\n    fts  = FieldTimeSeries{Center, Center, Center}(grid, [0, 1e6])\n    for n in eachindex(fts.times); set!(fts[n], 5); end\n    r = Relaxation(rate=1/60, target=fts)\n    model = NonhydrostaticModel(grid; tracers=:c, forcing=(; c=r))\n    # errors during update_state! with the isbits report.\n\nCPU path verified unchanged.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Lift FieldTimeSeriesTarget index to a type parameter\n\nAfter fixing Adapt (777c26f11), the GPU compilation moved past the\nisbits check but failed at the next step with:\n\n    InvalidIRError: unsupported call to an unknown function\n    (call to jl_f_getfield)\n\nThe cause is `model_fields[target.index][i, j, k]` in the kernel\ncallable: `model_fields` is a heterogeneous `NamedTuple` (different\nconcrete `Field` types for each key) and `target.index` is a runtime\n`Int`, so the load is type-unstable. CPU handles this via dynamic\ndispatch; CUDA PTX cannot lower a runtime `jl_f_getfield` and aborts.\n\nLift `index` from a runtime `Int` struct field into a type parameter\n`I::Int` on `FieldTimeSeriesTarget{L, F, I}`. The kernel uses a small\nhelper `_field_index(target)` that extracts `I` from the type, so\n`model_fields[_field_index(target)]` is a compile-time index. Each\nforced field gets its own specialized kernel — fine in practice\nbecause the number of forced fields per model is small.\n\nThis also matches @glwagner's caveat on the original review of #5575:\n\n  > Switching to this design does preclude the future possibility of\n  > an optimization that embeds the field index as a type parameter\n  > (so the compiler can infer `fields[field_index]`).\n\nIt turns out the \"future optimization\" isn't optional on GPU.\n\nThe Adapt method is updated to extract `I` from the type parameter and\nreinject it as the index argument so the adapted struct preserves the\nstatic-index property.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Cache fts.grid on FieldTimeSeriesTarget for GPU access\n\nAfter the type-param lift (a550ea2a3), GPU compilation still failed\nwith `unsupported call to jl_f_getfield` — pointing at the `fts.grid`\naccess in the kernel callable. `GPUAdaptedFieldTimeSeries` (the type\nthe FTS becomes after `Adapt.adapt_structure`) does not carry a `grid`\nfield — only `data`, `times`, `backend`, `time_indexing`. The\n`getproperty(fts_gpu, :grid)` therefore dynamic-dispatches on the host\nbut fails to lower on PTX.\n\nCache `field_time_series.grid` as an explicit field `fts_grid` on\n`FieldTimeSeriesTarget` (with its own `G` type parameter) so the kernel\nreads `target.fts_grid` instead of `fts.grid`. The Adapt method adapts\nthe grid in place — `RectilinearGrid` already has an adapt method that\nconverts it to a GPU-compatible form. The 3-arg outer constructor\npreserves the materialize_forcing call site: it pulls `fts.grid` from\nthe host-side FTS at construction time.\n\nCPU smoke test verified: same `max|c|` as before.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix Base.summary on FieldTimeSeriesTarget after index-to-type-param lift\n\nCommit a550ea2a3 lifted `FieldTimeSeriesTarget.index` from a struct\nfield into the type parameter `I::Int`, but the existing\n`Base.summary(::FieldTimeSeriesTarget)` still read `target.index`,\nproducing a `getproperty` error on access. This broke the\n`forcing_functions.md` jldoctest that exercised the summary, causing\nthe `documentation` CI job to fail (exit status 1).\n\nSwitch the summary to use the `_field_index(target)` helper which\nextracts the index from the type parameter. The doctest expected\noutput is unchanged.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Retrigger CI\n\n* Apply suggestions from code review\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* fix whitespace\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-19T17:17:25Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/0a60f2a094266a44cd6728d6510ea11b38a44792"
        },
        "date": 1779217008657,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05589600251,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.45704,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.171939,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.984371,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.594806,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984602,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979226,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.977145,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338238,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.644476,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.481596,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.032618014199999996,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21477484504,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04604232118,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03386008553,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07921853101,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25912972577000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03703366463,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.049668858,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07510807847999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.0717301461,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.061138889489999994,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06267704664,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05741578202,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05409190377,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059880507529999995,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05589600251,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05589600251,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05589600251,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05589600251,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05589600251,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05589600251,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Matt Graham",
            "username": "matt-graham",
            "email": "matthew.m.graham@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "38f7d9ccfb3496c100bfee077f097e1fba9399a4",
          "message": "Add support for plotting `FieldTimeSeries` in Makie extension (#5512)\n\n* Add support for FieldTimeSeries in Makie extension\n\n* Add tests for FieldTimeSeries Makie extension support\n\n* Trim trailing whitespace\n\n* More whitespace trimming\n\n* Update docstrings with suggestions from code review\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n---------\n\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-19T18:48:36Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/38f7d9ccfb3496c100bfee077f097e1fba9399a4"
        },
        "date": 1779223747598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05617812269,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.455649,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.172035,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988691,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5885025,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.983162,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979674,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978106,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338366,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642524,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.484637,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03280605719,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21504247236000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.046991037379999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03228016486,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07934323631,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25915719945,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03737485668,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04978284921,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07518789869,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07009970097,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.061128698220000006,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06256719429,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05743428019999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054152313779999996,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.0598154742,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05617812269,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05617812269,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05617812269,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05617812269,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05617812269,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05617812269,
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
          "id": "de4704f82d0550bc54a21ca05385aece48dba873",
          "message": "Update Clock constructor to use grid's float type (#5570)\n\n* Update Clock constructor to use grid's float type\n\n* Update src/TimeSteppers/clock.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Add test for Clock(grid) eltype propagation\n\nCo-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>\n\n* Add clock conversion for kernels\n\n* Update time_step_catke_equation.jl\n\n* Fix extension\n\n* Refactor clock with type parameter\n\n* whitespace\n\n* Update clock.jl\n\n* Fix reactant breakage\n\n* Code review suggestinos\n\n* Fixes for metal, from code review\n\n* Apply suggestions from code review\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* avoid type instability\n\n* Reorder Clock kernel time type parameter\n\n---------\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Claude Opus 4.7 <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-05-20T04:05:18Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/de4704f82d0550bc54a21ca05385aece48dba873"
        },
        "date": 1779255817654,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05605493872,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.454289,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.1704185,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989587,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.58959,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984122,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979546,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978522,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338622,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641468,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486877,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03986512655,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21505433288999998,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04417977679,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03201918165,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07925206838,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.2593019681,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03721678311,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04966994755,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07502617967,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07010098856,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06123326892,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06263172571,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057446716550000006,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05414356846999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05985443496,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05605493872,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05605493872,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05605493872,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05605493872,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05605493872,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05605493872,
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
          "id": "3e0bf7190192c573608703a110013131e96a634d",
          "message": "Bugfix distributed immersed boundary (#5571)\n\n* distributed immersed boundary\n\n* Apply suggestion from @simone-silvestri\n\n* Apply suggestion from @simone-silvestri",
          "timestamp": "2026-05-20T08:50:39Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/3e0bf7190192c573608703a110013131e96a634d"
        },
        "date": 1779276511381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0560298665,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.454417,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.170579,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989684,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.590247,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984442,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979578,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978522,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33859,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641117,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486909,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03186298457,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21503644327,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04423307791,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03206574862,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07956762048,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25919918908,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03740355743,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.049685383070000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07546285723,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07013318747,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06085424917,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06253431798,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05743599414,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05414861516,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05978476575,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0560298665,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0560298665,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0560298665,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0560298665,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0560298665,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0560298665,
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
          "id": "3630e8ae9d9172f2ae1fbdbd33f5c46f24fb6ea4",
          "message": "Add some claude style rules (#5606)\n\n* add rules\n\n* restart CI",
          "timestamp": "2026-05-20T09:27:05Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/3630e8ae9d9172f2ae1fbdbd33f5c46f24fb6ea4"
        },
        "date": 1779282222764,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.057884715340000004,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.454401,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.170739,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989908,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5903425,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984537,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979546,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978746,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33843,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641404,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486877,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03226131305,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21505988926,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04451214944,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03208667815,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07945578002999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25927463618,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03747363338,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04975207632,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07509370951,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07011418446,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06105987844000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06257100247,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05743729075,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05437244778,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.06027373387,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.057884715340000004,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.057884715340000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.057884715340000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.057884715340000004,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.057884715340000004,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.057884715340000004,
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
          "id": "5143361be6666557a6bf26e4e35fc05e5e6e6e1c",
          "message": "Add ZarrWriter and FieldTimeSeries Zarr reader (#5605)\n\n* Add ZarrWriter and FieldTimeSeries Zarr reader\n\nImplements `ZarrWriter` as a new output writer backed by Zarr.jl, alongside\nJLD2Writer and NetCDFWriter. Lives in an extension that triggers on `using Zarr`.\n\nCloses #3821.\n\n## Layout\n\nLean-chunked, non-CF: each output is a chunked Zarr array of shape\n`(spatial..., Nt)` growing along the time axis. `_ARRAY_DIMENSIONS` set to\n`trilocation_dim_name`-style names (reversed for C-order). Grid reconstruction\nserialized as JSON in a `grid/` (or `grid_<n>/` for multi-grid) subgroup.\nCF compliance left additive for a follow-up.\n\n## Features\n\n- Inputs: `AbstractField`, `AbstractOperation`, `Reduction`, `WindowedTimeAverage`,\n  functions (with `dimensions` kwarg). Same surface as `JLD2Writer`.\n- Multi-grid support via unique-grid detection + per-output `grid_index` attr.\n- File splitting (`NoFileSplitting` / `FileSizeLimit` / `TimeInterval`).\n- Append-on-existing-store with dtype validation on restart.\n- Compression via user-supplied `compressor` kwarg (default `NoCompressor`).\n- Stores: `DirectoryStore` (default), `DictStore` (memory), `S3Store`. `ZipStore`\n  rejected on write with a clear error pointing at `Zarr.writezip` for the\n  finalize-to-zip workflow.\n- `FieldTimeSeries(path, name)` reader: auto-detects `.zarr` and `.zip`.\n- MPI distributed writes: per-axis GCD chunk default, rank-0-owned metadata\n  + time writes, lock-free per-rank chunk-aligned data writes,\n  rank-topology in `.zattrs` for restart validation. Particles rejected\n  under MPI in v1.\n\n## Tests\n\n- `test/test_zarr_writer.jl` — 108 serial tests across 7 testsets covering API\n  surface, raw round-trip, operations/reductions/functions/WindowedTimeAverage,\n  grid reconstruction + multi-grid, FieldTimeSeries reader, append + dtype\n  validation on restart, DictStore + ZipStore-read.\n- `test/test_distributed_zarr_writer.jl` + `test/distributed_zarr_writer_tests.jl`\n  — `mpiexec`-driven driver exercising Partition(x=2), Partition(y=2),\n  Partition(x=2, y=2); 15 passing tests.\n- `test/manual/test_zarr_s3.jl` — env-gated S3/MinIO smoke test (not in CI).\n\n## Benchmarks\n\nComparative scripts in `benchmark/zarr_writer/` (not part of CI) for running\nZarrWriter vs JLD2Writer vs NetCDFWriter on CPU.\n\n## Plan\n\n`zarr_writer_plan.md` documents the locked-in design decisions, on-disk layout,\nprior-art comparison (SpeedyWeather), forward-compatibility path to CF, and\nimplementation-phase status.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Switch langmuir_turbulence example to ZarrWriter\n\nConverts the Langmuir turbulence example to use `ZarrWriter` instead of\n`JLD2Writer`. The on-disk layout (chunked time-series arrays) is friendlier\nto chunked / parallel reads for LES-scale output.\n\nGPU + (128, 128, 64) grid + 4-hour run unchanged from upstream. Verified\nlocally on CPU with a reduced 32^3 grid + 20-minute run: both output stores\nmaterialize correctly (u, v, w, b + U, V, B, wu, wv averages), all\nFieldTimeSeries reads round-trip, locations and grids reconstruct, and time\narrays match the 5-minute output cadence.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add Zarr to docs/Project.toml\n\nThe Langmuir turbulence example now `using Zarr`, so the docs project needs\nZarr to build.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Restrict ZarrExt's Field method dispatch to Zarr.ZArray\n\nThe reader's `Field(loc::Tuple, arr, name::String, time_index::Int; ...)` had\n`arr::Any`, which created a method ambiguity with the existing JLD2 method\n`Field(location, file::JLD2.JLDFile, name::String, iter; ...)`:\n  - `Field(loc::Tuple, arr::Any, ...)` is more specific on arg 1\n  - `Field(location::Any, file::JLD2.JLDFile, ...)` is more specific on arg 2\nNeither subsumes the other, so calls like `Field(loc, jldfile, name, iter)`\ninside `set_from_jld2!` dispatched into the Zarr extension's method by chance\nof ambiguity resolution, hit `ndims(jldfile)` and errored.\n\nRestricting `arr::Zarr.ZArray` resolves the ambiguity: the Zarr method matches\nonly when both args 1 and 2 are right; the JLD2 method matches only when arg 2\nis a JLDFile.\n\nFixes the `cpu/gpu-simulation-tests` and OutputReaders errors (19 errored\ntests locally; reproduced.)\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* rm benchmarks\n\n* Delete zarr_writer_plan.md\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-20T18:28:31Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/5143361be6666557a6bf26e4e35fc05e5e6e6e1c"
        },
        "date": 1779307318143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05577955373,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.454354,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.170163,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989652,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.590135,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984506,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979738,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978651,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338463,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64134,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.487037,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.0316674121,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21506559724,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.044192973249999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03209938271,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07938759046999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25915732589,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03735434093,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04968229523,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07527924278999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07008204205,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.0609949333,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06254710679,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05745778053,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054171437229999994,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059800455020000004,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05577955373,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05577955373,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05577955373,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05577955373,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05577955373,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05577955373,
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
          "id": "4339da66f07ded5f9052c49fae089f2fd00b5ed8",
          "message": "Auto-interpolate in `set!(::Field, ::Field)` on size/location mismatch (#5586)\n\n* Auto-interpolate in set!(::Field, ::Field) on size/location mismatch\n\nset!(u::Field, v::Field) currently errors with a DimensionMismatch when\nsizes or halos don't line up, and on Bounded grids can silently miscopy\nvalues when two fields have the same size but different staggered\nlocations.\n\nThis routes `set_to_field!` through `interpolate!` whenever\n`size(u) != size(v)` or `location(u) != location(v)`, migrating `v`\nto `u`'s architecture first so the existing same-arch requirement of\n`interpolate!` is satisfied. Same-size + same-location calls still go\nthrough the existing `parent .= parent` copy path, preserving halos\nwhen shapes line up.\n\nThe Reactant extension override falls back to CPU interpolation\n(mirroring `set_to_function!`) since `interpolate!`'s KA kernel does\nnot currently trace under Reactant (Reactant.jl#2364).\n\nTests cover: same-size big/small halo (unchanged behavior), different\nsizes via interpolation, same size + different location via\ninterpolation, and cross-architecture (GPU<->CPU) auto-interpolation.\n\nConservative remapping (`regrid!`) is intentionally not wired in here;\ncallers who want it should keep invoking `regrid!` explicitly.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Use on_architecture(child_architecture(u), v) instead of custom helper\n\nPer review feedback from @simone-silvestri: the existing\n`on_architecture(arch, ::Field)` method at src/Fields/field.jl:459\nalready does what `migrate_to_architecture` was hand-rolling, and does\nit better — it carries boundary conditions, operand, status, and\ncommunication buffers across as well, where the helper threw those\naway. It also short-circuits to a cheap re-wrap (sharing the underlying\ndata array) when source and destination archs already match.\n\nGoing through `child_architecture(u)` also avoids an edge case the\nhelper had on `Distributed` fields, where the helper would build `v`\non `u`'s full distributed arch and risk unwanted partitioning.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add tests for set!(Field, ReducedField) and sub-domain source\n\nReducedField test (passes):\n- Setting a 3D Field from a 2D xy-reduced Field at (Center, Center, Nothing)\n  broadcasts the xy data across the destination's z extent.\n- Same for a (Nothing, Nothing, Center) z-column source.\n\nSub-domain source test (one assertion broken):\n- Setting a Field on a large grid from a Field whose grid covers only a\n  strict subset of the destination domain.\n- Inside the overlap region values match interpolate!.\n- Outside the overlap, the natural expectation is that destination values\n  stay untouched. interpolate! does not currently honor this — it writes\n  garbage from the source's halo memory because the kernel uses @inbounds\n  reads at fractional indices that fall outside the source's interior.\n- Marked @test_broken so the failure mode is pinned. When interpolate! is\n  fixed to leave outside-source-domain values untouched (or to error), the\n  @test_broken can be promoted to @test.\n\nBoth raised in #5586 review (navidcy, simone-silvestri).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fill source halos before set! interpolation\n\n* Drop grid equality check from set!(field, field) matching path\n\nRequiring u.grid == v.grid forced same-size/same-location fields with\ndifferent halo sizes through interpolate!, which curvilinear grids don't\nsupport. materialize_immersed_boundary hits exactly this path when\nwith_halo extends the underlying grid, producing a MethodError on\nTripolarGrid (no fractional_x_index for OrthogonalSphericalShellGrid).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-20T18:58:10Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/4339da66f07ded5f9052c49fae089f2fd00b5ed8"
        },
        "date": 1779312831263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05595324212,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.455601,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.171922,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988372,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.588614,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.983098,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979482,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978138,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.337118,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642428,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.484796,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03274527163,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21529378108,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04518002602,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03204631568,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07920817068,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25922750476,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037227538139999995,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04965600821,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07513215432,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07007688237,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.0608561293,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06256604031,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05773916825,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05414450733,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05985093438,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05595324212,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05595324212,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05595324212,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05595324212,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05595324212,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05595324212,
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
            "name": "Navid C. Constantinou",
            "username": "navidcy",
            "email": "navidcy@users.noreply.github.com"
          },
          "id": "9721e9b56b3505fe0eb8e21065c157da20507062",
          "message": "add papers using Oceananigans",
          "timestamp": "2026-05-21T00:16:15Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/9721e9b56b3505fe0eb8e21065c157da20507062"
        },
        "date": 1779328017910,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05582115923,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4543685,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.1703065,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989651,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5905185,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984442,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979577,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978586,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338846,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641308,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486877,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03045854848,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21530012683,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.049166895950000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03205212799,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07942635239000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25942912319,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037261290100000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.0497867563,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07513291996,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07011447295,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06087514598,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06258809101,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057430244840000005,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054137458709999996,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.060094782369999995,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05582115923,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05582115923,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05582115923,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05582115923,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05582115923,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05582115923,
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
          "id": "f67d7b3855ea44f962b163cca3d4e8bbf3d38ae9",
          "message": "Remove reference to machine learning deployment paper (#5611)\n\nRemoved a reference to a paper on deploying machine learning components with OASIS3-MCT and Eophis.",
          "timestamp": "2026-05-21T00:41:09Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f67d7b3855ea44f962b163cca3d4e8bbf3d38ae9"
        },
        "date": 1779333658311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0557871185,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4545125,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.170451,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.98994,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.590391,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.98457,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979737,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.97865,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.337982,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64134,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486941,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.032662405799999995,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21531000465000003,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04686190207,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.032174895280000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07916446615,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.2592852863,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03737795716,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04979124145,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07531332121,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07014042342,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06095672819,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06260545098999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057429410880000004,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05409662676,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059824267869999996,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0557871185,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0557871185,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0557871185,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0557871185,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0557871185,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0557871185,
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
          "id": "75133d8b9c6f875b4bd75749cc3dbfc2e746efc6",
          "message": "Update DJ4Earth reference (#5612)",
          "timestamp": "2026-05-21T01:23:02Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/75133d8b9c6f875b4bd75749cc3dbfc2e746efc6"
        },
        "date": 1779339136509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.060379741640000005,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.454401,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.1704505,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989492,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.589895,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984474,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979514,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978619,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339261,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641052,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486749,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03247385835,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21504356585,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04431576826,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03200728833,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07944011159,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25928761423,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03711856142,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04969224651,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07509842576999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.0701045755,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.061075670979999996,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06257653504,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05743298895,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054143701460000006,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05989792483,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.060379741640000005,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.060379741640000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.060379741640000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.060379741640000005,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.060379741640000005,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.060379741640000005,
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
          "id": "53d66ef14eac863baf0eeb3f223248fea1e01e2e",
          "message": "Support OrthogonalSphericalShellGrid in NetCDFWriter (CF §5.2 + MutableVerticalDiscretization plumbing) (#5581)\n\n* NetCDFWriter: support OrthogonalSphericalShellGrid (CF §5.2 aux coords) + MVD plumbing\n\nAdds NetCDFWriter support for `OrthogonalSphericalShellGrid` (covering\n`TripolarGrid`, `RotatedLatitudeLongitudeGrid`, and `ConformalCubedSpherePanelGrid`),\nfollowing CF Conventions §5.2 for 2D curvilinear coordinates:\n\n- Bare logical-index dimensions `i_caa`/`i_faa`/`j_aca`/`j_afa` (defDim only,\n  no coordinate variable on them).\n- Eight 2D auxiliary coordinate variables `λ_cca`/`λ_fca`/`λ_cfa`/`λ_ffa`\n  and `φ_*` at each Arakawa-C stagger location, dimensioned `(i_*, j_*)`.\n- Each OSSG data field carries a `coordinates = \"λ_** φ_** z_aac\"` attribute\n  so xarray/ncview/Panoply pick up the right lat/lon.\n\n`MutableVerticalDiscretization`: the reference (Lagrangian) coordinate is now\nwritten as `r_aac`/`r_aaf` (rather than `z_*`), reflecting that physical\n`z = z(r, η, …)` is reconstructed from the static reference and the time-varying\nfree surface. Vertical-name dispatch goes through a new\n`vertical_coordinate_name(::AbstractVerticalCoordinate)` helper plumbed through\nexisting call sites; `StaticVerticalDiscretization` is unaffected.\n\nArchitectural changes touching all grids:\n\n- `create_spatial_dimensions!` now accepts entries of shape `(array, dims)` so\n  that 2D auxiliary coords can sit on bare 1D dimensions. The 1D coord-variable\n  case (Rectilinear, LLG, vertical) is wrapped via a `nc_variable` helper and\n  behaves identically to before.\n- `create_field_dimensions!` skips per-field recreation when dims already exist\n  in the dataset (the common path through `initialize_nc_file`).\n\n`constructor_arguments` methods added for `TripolarGrid` (full reconstruction)\nand `RotatedLatitudeLongitudeGrid` (best-effort: exact for `north_pole=(0,90)`).\nA permissive fallback for other OSSG variants lets writing succeed while\nreserving reconstruction for a follow-up.\n\nSmoke-validated locally:\n- TripolarGrid write produces correct dims and `coordinates` attributes.\n- Non-rotated `RotatedLatitudeLongitudeGrid` produces field values identical to\n  the equivalent `LatitudeLongitudeGrid` and coord arrays matching to roundoff.\n- Rectilinear/LatLon regressions clean.\n\nStill TODO in this PR: time-varying η output for MVD grids; OSSG grid metrics\n(`Δx_**`, `Δy_**`, `Az_**`); FieldTimeSeries round-trip tests for OSSG;\nformal CF `formula_terms` for z-star (deferred to follow-up).\n\nTowards #4332.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: emit OSSG grid metrics (Δx**, Δy**, Az**, Δz)\n\nExtends `gather_grid_metrics` with a dispatch for OrthogonalSphericalShellGrid\nthat emits twelve 2D horizontal metrics — Δx, Δy, Az at each Arakawa-C stagger\nlocation — plus the vertical Δz/Δr. The horizontal metric fields go through the\nstandard output path and pick up the (i_*, j_*) bare dim names and the\n`coordinates` attribute, so they're CF-readable just like data fields.\n\nVertical-spacing dim name now also flows through `vertical_coordinate_name` for\nparity with the coordinate switch in the previous commit (Δr_aac/Δr_aaf for MVD,\nΔz_aac/Δz_aaf for static).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: OSSG tests, fix grid reconstruction type-name + folded-topo eval\n\nAdds three OSSG-focused testsets to `test/test_netcdf_writer.jl`:\n1. `test_netcdf_tripolar_grid_output` — verifies bare i_*/j_* dims (no coord\n   var on them), all eight λ_**/φ_** 2D aux coords, `coordinates` attribute,\n   and all 12 grid metric fields plus Δz.\n2. `test_netcdf_rotated_llg_matches_llg` — the cross-validation linchpin:\n   a non-rotated `RotatedLatitudeLongitudeGrid` must produce field values\n   identical to the equivalent `LatitudeLongitudeGrid` and coords matching\n   (modulo the 360°-wrap convention).\n3. `test_netcdf_tripolar_grid_reconstruction` — `reconstruct_grid` from a\n   TripolarGrid output file yields a structurally equivalent grid.\n\nTwo reconstruction fixes needed to make the round-trip work:\n\n* `netcdf_string` overrides for `TripolarGrid` and `RotatedLatitudeLongitudeGrid`\n  so the stored type name is the alias (not the base `OrthogonalSphericalShellGrid`);\n  reconstruction then dispatches to the right constructor.\n* Import `RightCenterFolded`/`RightFaceFolded` into the NCDatasets extension so\n  the eval-at-read in `materialize_from_netcdf` can resolve them.\n\nAll 52 assertions across the new testsets pass locally on CPU.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: Δr_* metric names + RectilinearGrid + MVD test\n\nTwo follow-ups:\n1. Vertical spacing variables now name through `vertical_coordinate_name` on\n   `RectilinearGrid` too (LLG and OSSG were already updated). MVD grids emit\n   `Δr_aac`/`Δr_aaf` rather than `Δz_*`.\n2. New `test_netcdf_rectilinear_mvd_output` testset verifying a\n   `RectilinearGrid + MutableVerticalDiscretization` simulation writes the\n   `r_*` vertical names, no `z_*` dims, `Δr_*` metric vars, and field dim\n   signatures end in `r_aac`.\n\n58/58 assertions pass locally on CPU across the OSSG and MVD testsets.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* test: add FieldTimeSeries round-trip test for TripolarGrid\n\n`test_netcdf_tripolar_field_time_series` writes a few snapshots from a\nTripolarGrid simulation, captures the in-memory T at each iteration via a\ncallback aligned with the writer's `IterationInterval(1)`, and then\nreconstructs the file with `FieldTimeSeries(path, name)` and asserts that\n(a) the reconstructed grid is a TripolarGrid of the expected shape, (b) the\ntimes line up, and (c) every snapshot agrees with the corresponding `fts[k]`\ninterior within Float32 roundoff (the writer defaults to `Array{Float32}`).\n\nThis exercises both the new OSSG `constructor_arguments` and the standard\n`set_from_netcdf!` read path for OSSG fields.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: re-validate existing dim sizes in create_field_dimensions!\n\nThe dict-shape refactor of `create_spatial_dimensions!` left a regression in\n`test_netcdf_field_dimension_validation`: when a NetCDF file already has a\ndimension defined with the wrong size and `defVar(ds, \"c\", c)` is called for\na Field whose expected dim size differs, NCDatasets throws `ErrorException`\n(\"dimension … is already defined with the length N. It cannot be redefined\nwith a length of M for the variable c\") instead of the `ArgumentError` the\ntest expects.\n\nRestore the validation: in the \"all dims already exist\" branch of\n`create_field_dimensions!`, compare each dim's current size against the\nfield's interior shape (with reduced/Flat dims masked out) and throw a\ndescriptive `ArgumentError` on mismatch — this works uniformly for\nRectilinear, LatLon, and OSSG fields without needing to zip 2D `λ`/`φ`\narrays against bare 1D dim names.\n\nResolves the 4 failures in `test_netcdf_field_dimension_validation` from\nthe full local regression sweep (3459 / 3463 passing previously).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: dispatch create_field_coord_variables! by grid type\n\nReplace the conditional in create_field_dimensions! with a dispatched helper\n`_create_field_coord_variables!(ds, fd, grid, …)`.\n\n- RectilinearGrid / LatitudeLongitudeGrid (default 1D-coordinate path): zip the\n  field's dim names with `nodes(fd)` and call `create_spatial_dimensions!` as\n  before, which creates missing coord vars or validates existing ones against\n  the field's nodes. This is what made the original wrong-dim-size test\n  produce an ArgumentError (coord value mismatch), and the path that all\n  existing testsets depended on.\n- OrthogonalSphericalShellGrid: dimensions are bare `i_*`/`j_*` indices that\n  don't correspond positionally to the 2D `λ`/`φ` from `nodes(fd)`, so we\n  skip coord-variable creation here and just verify the named dimensions\n  exist (gather_dimensions must have run at init).\n- ImmersedBoundaryGrid: defers to the underlying grid.\n\nThe previous attempt to do a tuple-vs-tuple `getindex` for filtering broke\ntestsets that exercised `defVar` of fields outside the normal init flow.\nThis dispatch avoids that path entirely for 1D grids while still letting\nOSSG fields share the same `create_field_dimensions!` entry point.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* test: make Tripolar FieldTimeSeries round-trip NaN-tolerant + stable\n\nThe previous test ran 3 iterations with a non-trivial IC, which can produce\nNaN cells on a tiny (12×10×3) tripolar grid before the I/O round-trip is\nchecked. Two adjustments:\n\n- `stop_iteration=1` and a smaller smooth IC `sin(λ)·cos(φ)`. We're testing\n  the round-trip, not the dynamics.\n- NaN-tolerant value comparison: two cells are considered equal if both are\n  NaN or they're approximately equal. This makes the test robust to any\n  halo NaNs that might propagate into the interior on edge cases.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: address review feedback — rename helpers, aliases, drop shim\n\nRound of mechanical cleanups in response to review:\n\n- `effective_dim_names` replaces the awkward `spatial_dim_names_nonempty` in\n  `create_field_dimensions!`, matching the convention already in use elsewhere\n  in `create_spatial_dimensions!`.\n- Drop the `nc_variable` \"backwards compatibility\" shim. It conflated two roles\n  (constructor for the new tuple shape; lift-old-shape pass-through) and the\n  \"backwards compatibility\" label was misleading anyway — this PR introduces\n  both shapes. `create_spatial_dimensions!` now accepts entries that are\n  either an `AbstractArray` (1D coord variable with dim = var_name) or a\n  `NamedTuple(array, dims)` (aux coord variables, e.g. 2D λ/φ on OSSG).\n- Add `Oceananigans.ImmersedBoundaries.underlying_grid(grid)` as a public\n  helper; it returns `grid` for non-immersed grids and `grid.underlying_grid`\n  for an `ImmersedBoundaryGrid`. The NetCDFWriter ext imports and uses it\n  rather than a private `_underlying_grid` shim.\n- Drop underscore prefixes from internal helpers I introduced — those are by\n  convention reserved for kernel-style functions in this codebase. Renames:\n    `_create_field_coord_variables!` → `create_field_coord_variables!`\n    `_add_aux_coordinates_attribute!` → `add_aux_coordinates_attribute!`\n      (consolidated as a multimethod entry + grid-typed methods).\n    `_az_at` → `Az_at_node` (the OSSG 2D-area accessor passed to a\n      `KernelFunctionOperation`).\n    `_underlying_grid` → removed (replaced by `ImmersedBoundaries.underlying_grid`).\n- Introduce short type aliases `OSSG`, `SVD`, `MVD` in\n  `src/OutputWriters/netcdf_writer.jl` for compact dispatch in the\n  `trilocation_location_string` / vertical-name method tables.\n- Merge the Static and Mutable methods of `suffixed_dim_name_generator` and\n  the `Val{:z}` `trilocation_location_string` into one method dispatching on\n  `::AbstractVerticalCoordinate` — they were identical.\n- Inside `gather_vertical_dimensions`, use the literal name (\"z\" for Static,\n  \"r\" for Mutable) — the coordinate type already tells us which one; the\n  `vertical_coordinate_name(coordinate)` call was redundant. The helper is\n  kept for grid-typed callers (field_dimensions, add_aux_coordinates_attribute!)\n  that don't have the coordinate type in hand.\n- Remove the `:reconstruction_unsupported => true` marker from the fallback\n  `constructor_arguments(::OrthogonalSphericalShellGrid)`. It didn't actually\n  signal anything to the read path. Reconstruction failure for OSSG variants\n  without a tailored constructor is now communicated naturally by a\n  `MethodError` from the OSSG constructor (a follow-up will add metrics-based\n  OSSG reconstruction that bypasses the constructor entirely).\n\nSmoke-tested locally: TripolarGrid write still produces the right dims, aux\ncoords, `coordinates` attribute, and all 12 grid metrics.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: metrics-based OrthogonalSphericalShellGrid reconstruction\n\nReconstruct OSSG variants directly from the saved λ/φ/Δx/Δy/Az/z arrays rather\nthan by replaying the user-facing constructor. This generalises reconstruction\nacross all OSSG aliases (TripolarGrid, RotatedLatitudeLongitudeGrid, future\nvariants) with a single code path, and avoids per-alias `constructor_arguments`\nmethods that re-encode parameters the metric arrays already capture.\n\nWhat lands:\n\n- Drop tailored `Grids.constructor_arguments(::TripolarGrid)` and\n  `(::RotatedLatitudeLongitudeGrid)`. The fallback in\n  `OrthogonalSphericalShellGrids.jl` now records arch + FT + size + halo +\n  topology + radius — everything that isn't on the metric arrays themselves.\n\n- Add `conformal_mapping_info(cm)` in `OrthogonalSphericalShellGrids` that\n  flattens a `Tripolar` / `LatitudeLongitudeRotation` into a\n  NetCDF-attribute-friendly `Dict`. Cubed-sphere panel mappings fall through\n  to a stub (recorded by type name only).\n\n- Writer: `write_grid_reconstruction_data!` now also emits a\n  `conformal_mapping` group with those attributes for OSSG grids.\n\n- Reader: `reconstruct_grid` dispatches any `underlying_grid_type <:\n  OrthogonalSphericalShellGrid` to a new `reconstruct_ossg_grid` helper.\n  That helper:\n    * rebuilds the vertical `StaticVerticalDiscretization` from saved\n      `r_aaf`/`z_aaf` face values via `generate_coordinate`;\n    * allocates halo-padded 2D OffsetMatrices via `Oceananigans.Grids.new_data`\n      (imported as `allocate_grid_data` to avoid a name clash with the separate\n      `OutputReaders.new_data`) and copies the interior λ/φ/Δx/Δy/Az data into\n      them — handling both `with_halos=true` and `with_halos=false` files;\n    * rebuilds the `conformal_mapping` (Tripolar / LatitudeLongitudeRotation)\n      from the saved attributes, preserving the type alias so that the\n      reconstructed `TripolarGrid` keeps its `Zipper` boundary-condition\n      dispatch.\n\n- Tests updated: the FTS round-trip and reconstruction tests now pass\n  `include_grid_metrics=true` (required by metrics-based reconstruction;\n  the writer default is `true` already, only the tests had overridden).\n  The `isa TripolarGrid` assertion remains — the conformal mapping round-trip\n  preserves the type alias.\n\nVerified locally on CPU: 70/70 assertions pass across the OSSG and MVD\ntestsets (TripolarGrid output, RotatedLLG vs LLG cross-validation, TripolarGrid\nreconstruction, TripolarGrid FieldTimeSeries roundtrip, Rectilinear+MVD).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: address PR review — IBG(OSSG) fix, CCSPG support, docs\n\nAddresses several review comments on #5581:\n\n- r3244774627 (`underlying_grid(::Field)` missing): add the actual method —\n  `underlying_grid(field::AbstractField) = underlying_grid(field.grid)` —\n  alongside the grid-typed methods in `ImmersedBoundaries`. `AbstractField` is\n  pulled in via a new `using Oceananigans.Fields: AbstractField` line.\n\n- r3248611797 / r3248846256 (IBG-on-TripolarGrid throws \"missing dimension\n  i_caa\"): in the immersed-boundary reconstruction-data writer we\n  `defVar(ibg_group, \"bottom_height\", field)` against a NetCDF subgroup whose\n  dimension scope is local — the bare `i_*`/`j_*` dims live in the parent\n  dataset and aren't visible. Fix `create_field_coord_variables!` for OSSG to\n  `defDim` any missing bare dim using the field's interior shape; the common\n  init path (where `gather_dimensions` already populated them) becomes a no-op.\n\n- r3244816427 (silent fail on existing 2D aux coords): the existing-variable\n  branch of `create_spatial_dimensions!` only validated 1D coordinate\n  variables, silently accepting any mismatch for 2D aux coords (e.g. λ_cca,\n  φ_cca). Now we validate every existing variable's values against the\n  expected, raising `ArgumentError` on mismatch.\n\n- r3244747500 / r3248686049 (untested grids): add\n  `test_netcdf_tripolar_immersed_output`,\n  `test_netcdf_cubed_sphere_panel_output`,\n  `test_netcdf_cubed_sphere_panel_immersed_output`. All three exercise the\n  end-to-end write path; the tripolar IBG test also round-trips through\n  `FieldTimeSeries` and confirms the reconstructed grid is an\n  `ImmersedBoundaryGrid{<:TripolarGrid}`. The CCSPG reconstruction asserts a\n  generic `OrthogonalSphericalShellGrid` (its `CubedSphereConformalMapping`\n  isn't round-trippable through the conformal-mapping serialization yet — a\n  documented follow-up).\n\n- CCSPG + Δz metrics workaround: `Field(zspacings(grid, Center()))` for a\n  `ConformalCubedSpherePanelGrid` triggers a Julia 1.12 GC segfault during\n  writer init due to the deep 5-parameter `CubedSphereConformalMapping` type\n  signature (horizontal metrics are unaffected). `gather_grid_metrics(::OSSG)`\n  now skips vertical Δz emission for `ConformalCubedSpherePanelGrid` only —\n  TripolarGrid / RotatedLatitudeLongitudeGrid still emit `Δz_aac`/`Δz_aaf`\n  normally. The 1D reference `z_aac`/`z_aaf` coord variables are still\n  written, so vertical spacings remain derivable.\n\n- issue comment 4455292526 (CF §5.2 not documented): expand the `NetCDFWriter`\n  constructor docstring with a new \"OrthogonalSphericalShellGrid\" section\n  describing the CF §5.2 aux-coord convention (logical-index dims + 2D\n  λ/φ aux coords + per-field `coordinates` attribute), linking to the spec.\n\nAll 96 assertions across the OSSG and MVD testsets pass locally on CPU\n(5 prior tests + 3 new = 8 functions).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: test OSSG + variable-z and OSSG + MVD; refine docstrings\n\nAfter re-bisection the CCSPG `Field(zspacings(grid, …))` segfault under\nJulia 1.12 is **specifically** tied to the deep\n`CubedSphereConformalMapping{Rotation, Fξ, Fη, Cξ, Cη}` type with four nested\n`StepRangeLen{Float64, TwicePrecision{Float64}, …}` parameters; it does not\ntrip for other OSSG combinations. Adds:\n\n- `test_netcdf_tripolar_variable_z_output` — `TripolarGrid` with `z` supplied\n  as a `Vector{Float64}` (so the vertical discretization stores\n  `OffsetVector{Float64, Vector{Float64}}` rather than the uniform\n  `StepRangeLen` case). Verifies horizontal + Δz metrics + reconstruction\n  agree with the input z faces to roundoff.\n- `test_netcdf_tripolar_mvd_output` — `TripolarGrid` wrapped around\n  `MutableVerticalDiscretization`, with `vertical_coordinate=ZStarCoordinate()`.\n  Combines OSSG aux-coord plumbing with the `r`-named reference vertical,\n  the `Δr_*` metric naming, and the Zipper BC dispatch. Asserts the dim\n  signature on `T` is `(i_caa, j_aca, r_aac, time)` and the `coordinates`\n  attribute is `\"λ_cca φ_cca r_aac\"`.\n\nThe CCSPG `Δz` skip in `gather_grid_metrics(::OSSG)` therefore stays narrow\n(`grid isa ConformalCubedSpherePanelGrid` only); Tripolar and\nRotatedLatitudeLongitudeGrid emit `Δz_*` / `Δr_*` metrics normally, and the\ntwo new tests are the regression guard for that.\n\nAlso tightens the `constructor_arguments(::OSSG)` docstring per r3244738532:\nOSSG is the general orthogonal-on-sphere grid; TripolarGrid /\nRotatedLatitudeLongitudeGrid / ConformalCubedSpherePanelGrid are different\n*ways to generate* an OSSG (parameterized by their `conformal_mapping`),\nnot different grid types — NetCDFWriter rebuilds them via the saved\nmetric/coordinate arrays rather than by replaying their generator functions.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: clarify the CCSPG-Δz skip comment\n\nAfter more bisection: `zspacings` and `xspacings` use entirely separate kernel\nfunctions (`Oceananigans.Operators.Δz` vs `Δx`) — neither reads the conformal\nmapping. But `Field(KernelFunctionOperation(F, grid, …))` carries the *full*\ngrid type as a parameter, including `grid.conformal_mapping`. Julia 1.12 has\na pathological specialization of `(F = Δz, grid.conformal_mapping =\nCubedSphereConformalMapping{Nothing, StepRangeLen{…}×4})` that segfaults in\n`gc_mark_outrefs`; the same `Δz` on Tripolar (shallow conformal mapping) is\nfine, and `Δx`/`Δy`/`Az_at_node` on CCSPG are fine.\n\nSo the relationship between `zspacings` and `conformal_mapping` is purely\nthrough Field's type system, not the algorithm. Update the workaround comment\nto reflect this — it's a Julia compile-path bug pinned to a single\n`(kernel, conformal_mapping)` cell, not a semantic issue.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: fix CCSPG-Δz segfault properly — plain Field, no carve-out\n\nAfter deeper debugging (PR #5581 discussion), the segfault is not in\n`gc_mark_outrefs` but in `ijl_types_equal` (`subtype.c`) inside\n`jl_specializations_get_linfo_` — Julia 1.12's method-specialization cache\nchokes on the pairing of:\n\n  * the `Operators.Δz` kernel function (and its `AbstractArray`\n    `getspacing_3d`/Broadcast specialization), and\n  * a grid type carrying `CubedSphereConformalMapping{Nothing,\n    StepRangeLen{Float64, TwicePrecision{Float64}, …}×4}`.\n\nBisection (run-by-hand against the same `Field(KernelFunctionOperation(F, ccspg, …))`\nconstruction):\n\n  | F = Δx, Δy, Az_at_node  →  ✓\n  | F = Δz                  →  segfault\n\nSo `Δz` and the conformal mapping are unrelated semantically — `Δz` only\nreads `grid.z` — but `Field(KernelFunctionOperation(Δz, …))` carries the\nfull grid type as a Field type parameter, and that pairing is what Julia's\ntype system trips on.\n\nThe clean fix is to drop the `KernelFunctionOperation` wrapper for the\nvertical OSSG metric entirely. A plain `Field{Nothing, Nothing, lz}(grid)`\nwith its interior set explicitly from `grid.z.Δᵃᵃᶜ` / `grid.z.Δᵃᵃᶠ` has a\nmuch shorter type signature and compiles fine on every OSSG variant\n(verified for Tripolar, RotatedLatitudeLongitudeGrid, CCSPG).\n\nSo the workaround that special-cased `ConformalCubedSpherePanelGrid`\n(skipping vertical metrics) is removed; CCSPG now emits `Δz_aac`/`Δz_aaf`\n(or `Δr_*` for MVD) just like any other OSSG. Horizontal metrics still go\nthrough `Field(xspacings(...))` etc., which works fine on CCSPG.\n\n`ossg_vertical_spacing_field(grid, lz)` is the new internal helper that\nbuilds the plain Field. It handles both the scalar-Δ (uniform z) and\nvector-Δ (variable z) cases.\n\nTest updated to assert `Δz_aac` and `Δz_aaf` are present in the CCSPG output\nfile. Full OSSG + MVD suite: 111/111 assertions pass locally on CPU\n(8 functions, up from 96 in the previous round due to the now-meaningful\nΔz checks on CCSPG plus the variable-z and MVD tests).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: unify vertical-metric construction across all grid types\n\nYou called out the architectural smell: vertical spacing lives entirely in\n`grid.z`, so there is no reason `gather_grid_metrics` should have an\nOSSG-specific code path for the vertical Δz/Δr metric — the construction is\nidentical for RectilinearGrid, LatitudeLongitudeGrid, and OSSG.\n\nExtract `add_vertical_metrics!(metrics, grid, dim_name_generator)` and call it\nfrom all three `gather_grid_metrics` dispatches. The helper reads\n`grid.z.Δᵃᵃᶜ` / `grid.z.Δᵃᵃᶠ` directly and stuffs the values into a plain\n`Field((Nothing, Nothing, lz), grid)` rather than wrapping `zspacings(grid, lz)`\nin a `KernelFunctionOperation`. This:\n\n  (a) eliminates the duplicated Δz block in three places, and\n  (b) keeps the Field's type signature shallow enough that the Julia 1.12\n      `(Δz, CubedSphereConformalMapping{…StepRangeLen…})` specialization-cache\n      bug doesn't trip — for *every* grid, not by special-casing CCSPG.\n\nNumerically equivalent to the prior `Field(zspacings(grid, lz))` form for\nevery grid (`grid.z.Δᵃᵃᶜ` is the same storage `zspacings` reads).\n\nAlso drops the now-unused `ossg_vertical_spacing_field` helper introduced in\nthe previous commit — the shared `vertical_spacing_field(grid, lz)` is\ngrid-type-agnostic.\n\n113/113 OSSG + MVD assertions still pass locally on CPU.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: stage vertical metrics through set!\n\n* NetCDFWriter: restore grid reconstruction file\n\n* NetCDFWriter: stage GPU vertical metrics on CPU\n\n* Buildkite: ignore stale docs manifest\n\n* Buildkite: restore pipeline commands\n\n* Update ext/OceananigansNCDatasetsExt/OceananigansNCDatasetsExt.jl\n\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\n\n* Address review on OSSG NetCDF reconstruction\n\n- Thread `indices` through `add_vertical_metrics!` / `vertical_spacing_field`\n  so a restricted z range no longer throws DimensionMismatch.\n- Merge the GPU `vertical_spacing_field` into the single CPU definition via\n  `on_architecture(CPU(), Δ)` + `set!`; delete `gpu_vertical_spacing_field.jl`.\n- Pull `OrthogonalSphericalShellGrid` from `Oceananigans.Grids` rather than\n  `Oceananigans.OrthogonalSphericalShellGrids`.\n- Always `fill_halo_regions!` the 2D OSSG metrics on read by wrapping each\n  array as a `Field` on a preliminary grid; the grid's topology gives the\n  correct fold BC for TripolarGrid, so derivatives across the fold no longer\n  NaN even when the file was written without halos.\n- Drop the opaque Julia 1.12 specialization-cache comment above\n  `add_vertical_metrics!`.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Clarify cubed-sphere conformal_mapping fallback comment\n\nThe previous wording (\"losing the panel rotation info\") read like the grid\nitself was missing data. Reword to make explicit that this is a\nmetadata-only loss: the OSSG reconstructs faithfully from its saved metric\nand coordinate arrays and is fully usable; only the type-alias identity\n(e.g. ConformalCubedSpherePanelGrid) is dropped.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: fix GPU set! on vertical metric and CPU dropdims on Nz>1\n\nTwo bugs in the OSSG/MVD reconstruction path, both surfacing when\n`include_grid_metrics=true` (the default on `NetCDFWriter`):\n\n1. `vertical_spacing_field` passed a `reshape(view(::Vector{Float64}, …),\n   (1,1,N))` to `set!`. That type misses `set!(::Field, ::Union{Array,\n   OffsetArray})` and falls into the `u .= v` broadcast fallback — which\n   on GPU launches a kernel with a host `Vector{Float64}` and gets\n   rejected by CUDA for being non-isbits. Materialize the source to a\n   plain 3D `Array` so dispatch hits `set_to_array!` (which handles arch\n   transfer via `copyto!`).\n\n2. `halo_fill_2d_metric` built a `Field{LX, LY, Center}(grid)` (3D, with\n   `Nz + 2Hz` cells in z) and then called `dropdims(data, dims=3)`,\n   which throws \"dropped dims must all be size 1\" the moment Nz > 1.\n   Keep `LZ = Center` (the TripolarGrid fold halo BC dispatches on\n   `Center`), broadcast the 2D metric to every z-level, and return\n   `view(data, :, :, 1)` instead of dropdims.\n\nThe GPU failure was hitting `test_creating_and_appending` (the first\nNetCDFWriter test in the simulation group) and cascading to every other\nGPU NetCDFWriter test path. The CPU failure was the OSSG-reconstruction\ntestset error.\n\nA separate, pre-existing assertion mismatch on `reconstructed.λᶜᶜᵃ` vs\n`grid.λᶜᶜᵃ` at the periodic edge (longitudes wrapping past 360°) is now\nvisible — it was hidden behind the dropdims crash. Tracking separately.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* NetCDFWriter: preserve λ interior across the fold halo-fill\n\n`halo_fill_2d_metric` builds a Field, copies the saved interior in, and\ncalls `fill_halo_regions!`. For TripolarGrid this dispatches to\n`fold_north_center_center_upivot!` (and `_face_center_`), which — after\nfilling the halo proper — also runs a \"redundancy substitution\" on the\n*interior* j=Ny row: the right half is overwritten with the mirrored\nvalue from the left half.\n\nThat substitution is correct for symmetric metrics (Δx, Δy, Az, φ —\nalready equal on both halves) but wrong for λ, where the two halves\ndiffer by 360°. The result was `reconstructed.λᶜᶜᵃ[i, Ny]` coming back\nas `orig - 360` for i > Nx/2, failing the\n`test_netcdf_tripolar_grid_reconstruction` λ assertion (the failure the\nd6b115e57 commit message flagged as \"now visible\").\n\nRestore the interior from the saved data after `fill_halo_regions!`. For\nthe symmetric metrics this is a no-op; for λ it preserves the wrap.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>",
          "timestamp": "2026-05-21T04:53:52Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/53d66ef14eac863baf0eeb3f223248fea1e01e2e"
        },
        "date": 1779344770264,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05602148724,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.455521,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.171715,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.98866,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5886145,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.982841,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979386,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.977786,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33811,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642588,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.484637,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03521774869,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21505539137,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.046372049879999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03201080881,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.0791669319,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.2590290276,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03719632726,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.049683307030000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07501402381,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07011647631,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06083941592,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06254060812,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05744931861,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05426688302,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05982063033,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05602148724,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05602148724,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05602148724,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05602148724,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05602148724,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05602148724,
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
          "id": "707cf9e6b3ed3c4a8e1bc202b54cfd7f5829fbd8",
          "message": "Support `InMemory(N)` with split timeseries (#5607)\n\n* fix split path\n\n* fix",
          "timestamp": "2026-05-21T10:52:48Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/707cf9e6b3ed3c4a8e1bc202b54cfd7f5829fbd8"
        },
        "date": 1779369682965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.055909442489999996,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4551845,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.1714585,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988307,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5880225,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.982938,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979322,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.97769,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33667,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642332,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.484509,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02848647486,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21526814012999998,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04418730304,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.032197168289999994,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07924087425,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25906614827999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03721295399,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.0496978767,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07519743407,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07010497710000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06082826613,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06254795198,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057424276159999996,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054146438830000004,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.060069276350000006,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.055909442489999996,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.055909442489999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.055909442489999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.055909442489999996,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.055909442489999996,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.055909442489999996,
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
          "id": "c2c4d1fa3eb12c322173df4246798924223b8a71",
          "message": "Fix broken LagrangianAveraged DynamicSmagorinsky regression tests (#5506)\n\n* Fix broken LagrangianAveraged DynamicSmagorinsky regression tests\n\nTwo bugs prevented the regression test from exercising the Lagrangian-\naveraged dynamic Smagorinsky closure at all:\n\n1. Duplicate nested `for` loop in `test_nonhydrostatic_regression.jl`\n   caused the inner loop to shadow the outer one, running each closure\n   16 times instead of 4 (with no effect on correctness, since the\n   inner variable always won).\n\n2. `ocean_large_eddy_simulation_regression_test.jl` restores model\n   state via direct `.=` assignment rather than `set!`, so\n   `initialize_closure_fields!` was never called with the loaded\n   velocities. For LagrangianAveraging this left 𝒥ᴹᴹ = 0, which\n   permanently disables the closure (ϵ = 0 → 𝒥ᴹᴹ never accumulates).\n   Now calls `initialize_closure_fields!` after state is loaded so the\n   closure is properly bootstrapped from the checkpoint velocities.\n\nNote: the LagrangianDynamicSmagorinsky regression test will correctly\nfail until reference data is regenerated with the fixed code.\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>\n\n* comment out tests we're not testing\n\n* better fix\n\n* Restore previous_compute_time Ref for bit-exact LagAvg DynamicSmag regression\n\nThe regression test loader previously only restored `Field`-typed leaves\nin `model.closure_fields`, skipping the `previous_compute_time::RefValue`\nscalar. After `set!(model, ...)`, that Ref was left at `clock.time = 0`\n(because `model.clock.time` is updated only later). At the first time\nstep from the loaded checkpoint, `Δt_lagrangian = clock.time - 0` was\ncatastrophically large, making `ϵ ≈ 1` in `_lagrangian_average_LM_MM!`\nand effectively discarding the carefully-restored 𝒥 history.\n\nExtends the closure-restoration loop to also copy `Base.RefValue` leaves,\nso `previous_compute_time` is set to the value from the checkpoint. With\nthis, the LagrangianAveragedDynamicSmagorinsky regression test reproduces\nthe reference iteration to machine epsilon (~1e-15) over 10 time steps.\n\nAlso:\n- Auto-detect new (`simulation/model/...`) vs legacy (root) checkpoint\n  paths in `get_fields_from_checkpoint`.\n- Add `load_interior(data, target_size)` helper that auto-detects how\n  many halo layers are saved and unwraps OffsetArrays — removes the\n  brittle hardcoded `[2:end-1, 2:end-1, 2:end-1]` slicing.\n- Return `closure_fields` (and `pNHS`, harmlessly) from\n  `get_fields_from_checkpoint`.\n- Fix the regression-data-generation block (which had a stale\n  `simulation.stop_iteration = ...` referring to a `simulation` that\n  was never constructed) so it can be uncommented to regenerate\n  reference data.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* force redownload of the data if the files have changed sizes\n\n* make it work on GPU\n\n* uncomment temporarily commented out regions\n\n* remove unnused function\n\n* Make rayleigh_benard regression's get_fields_from_checkpoint destructure explicit\n\n`get_fields_from_checkpoint` now returns 5 values (`solution, Gⁿ, G⁻,\nclosure_fields, pNHS`). Rayleigh-Bénard only needs the first three;\nJulia's destructuring iterates and silently discards extras, so the\nold `solution, Gⁿ, G⁻ = get_fields_from_checkpoint(...)` works, but\nit's not self-documenting. Bind the unused values to `_` so the call\nsite explicitly shows that two extras are being ignored.\n\nAddresses Copilot review comment on #5506.\n\n---------\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>",
          "timestamp": "2026-05-21T11:21:05Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/c2c4d1fa3eb12c322173df4246798924223b8a71"
        },
        "date": 1779375003405,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05581277498000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.454128,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.1704665,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989619,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5898455,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984186,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979482,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978458,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33843,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64102,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486749,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02803249144,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21504798588,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04444261189,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.032036530019999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.0792038549,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25924446659,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037232253480000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04966387676,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07539347771,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07012206282,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.0608516864,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06254559209,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05743132243,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05443074985,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059978797,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05581277498000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05581277498000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05581277498000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05581277498000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05581277498000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05581277498000001,
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
          "id": "201d43163c780c6686f1e1d361b9af7cfe2fd9f6",
          "message": "Add `show` method for `PerturbationAdvection` (#5616)",
          "timestamp": "2026-05-21T14:42:39Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/201d43163c780c6686f1e1d361b9af7cfe2fd9f6"
        },
        "date": 1779384395770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05599187505,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4538725,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.170002,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989492,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5899575,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.983962,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979258,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.97833,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33923,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64134,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486781,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03083727454,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21525946896,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04418920001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03220470818,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07949301896,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25912573009,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03713911401,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04966450947,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07511801637,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.0712458405,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.060826332780000006,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06255131112,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057420230749999995,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05415687947,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059904707689999996,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05599187505,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05599187505,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05599187505,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05599187505,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05599187505,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05599187505,
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
          "id": "6885bfb7c4f3a03a9a9917c14856e52a63348808",
          "message": "Fix `set!(::DistributedField, ::Field)` regression from #5586 (#5619)\n\n#5586 routed `set_to_field!` through `on_architecture(child_architecture(u), v)`\n+ `fill_halo_regions!(v_on_u)` + `interpolate!` whenever\n`matching_field_discretization` is false. On distributed fields that path is\nbroken in two ways:\n\n1. `indices(u) == indices(v)` rejects equivalent windows like `(:, :, :)` vs\n   `(1:Nx, 1:Ny, 1:Nz)`, sending well-formed `set!` calls down the else\n   branch unnecessarily. `TransposableField` constructs zfield/yfield/xfield\n   with explicit unit-range indices, so `set!(Φ.zfield, ϕ)` in\n   `test_distributed_transpose.jl` always falls through.\n\n2. `on_architecture(child_architecture(u), v)` strips `Distributed{CPU}` to\n   `CPU` on the grid but leaves the `DistributedCommunicationBoundaryCondition`s\n   (and the precompiled `DistributedFillHalo` kernels) intact. The subsequent\n   `fill_halo_regions!(v_on_u)` then dispatches to the non-distributed path\n   and invokes `DistributedFillHalo{WestAndEast}` with 6 args via the inlined\n   `fill_halo_event!`, when the only method takes 7 (`c, bc1, bc2, loc, grid,\n   arch, buffers`) — MethodError.\n\nFixes:\n\n* `matching_field_discretization` now treats `Colon` and the equivalent full\n  `UnitRange` as the same window (per-dimension, parameterized by size). Same\n  size + same location + equivalent windows now correctly takes the cheap\n  copy path.\n\n* `set_to_field!` fills halos on `v`'s native architecture before migrating,\n  so distributed dispatch is used when `v` is distributed. The post-migration\n  `interpolate!` then samples a field whose halos are already populated.\n\nRepros via `test/test_distributed_transpose.jl` (passed at parent of #5586,\nfailed at the merge of #5586).",
          "timestamp": "2026-05-21T21:51:26Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/6885bfb7c4f3a03a9a9917c14856e52a63348808"
        },
        "date": 1779405751494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05654818205,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4545605,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.17037,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989619,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.589942,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984474,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979738,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978937,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338302,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.641372,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486813,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.027954500219999998,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21531161699999998,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04425163155,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03202673146,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07921975437,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25911900127,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.037294580009999995,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04973621608,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07507931004,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07023808148999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.062321976159999994,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.0625482311,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057433916409999994,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0541486856,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.059799090650000004,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05654818205,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05654818205,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05654818205,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05654818205,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05654818205,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05654818205,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Kamm",
            "username": "vopikamm",
            "email": "39192175+vopikamm@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "45768b669b00e1257636a1b85e64153694aeba9d",
          "message": "Add OrthogonalSphericalShellGrid zarr_field_dimension dispatch (#5626)\n\n* Add OrthogonalSphericalShellGrid zarr_field_dimension dispatch\n\n* adding tests for tripolar grid with zarr",
          "timestamp": "2026-05-26T08:44:32Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/45768b669b00e1257636a1b85e64153694aeba9d"
        },
        "date": 1779790423135,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0559895592,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.454496,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.170754,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.989588,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5899095,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.984506,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.979705,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.978522,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338142,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64134,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.486845,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.030198338119999998,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21505541116,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.0442166573,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03206772412,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.07917850004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.25978353878,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03730240524,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.04967013821,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07507670827,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07033490788,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.0608480975,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.0625723359,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05805593305,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.054118916759999997,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.05987470523,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0559895592,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0559895592,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0559895592,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0559895592,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0559895592,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0559895592,
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
          "id": "7fd634a9df414959ff3ea7061d1248aa2750b3ab",
          "message": "Adaptive implicit vertical advection (#5604)\n\n* adaptive implicit vertical advection\n\n* small changes\n\n* adaptive implicit vertical advection\n\n* add a validation\n\n* rename test\n\n* Apply suggestion from @simone-silvestri\n\n* make AdaptiveVerticallyImplicitDiscretization a property of the advection scheme\n\n* import correct functions\n\n* add the new file\n\n* vertical_discretization -> time_discretization\n\n* fix everything\n\n* see if performance changed\n\n* remove if not needed\n\n* correct\n\n* fix a sneaky bug\n\n* fix more bugs\n\n* fix mmissing `time_discretization`\n\n* fix whitespaces\n\n* fix advection\n\n* remove whitespace\n\n* more fixes\n\n* add some tests\n\n* typo\n\n* correct VectorInvariant\n\n* make sure we can run the tests\n\n* correct vector invariant\n\n* move discretizations to TImeSteppers\n\n* fix the tests\n\n* fix some more bugs\n\n* remove useless comment\n\n* rout horizontal advection through ETD\n\n* fix tests\n\n* fix tests\n\n* swap M with TD",
          "timestamp": "2026-05-27T13:56:16Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/7fd634a9df414959ff3ea7061d1248aa2750b3ab"
        },
        "date": 1779895545612,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05595379844,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.431066,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.338331,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 2.010574,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.4840985,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.996215,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.990551,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.989272,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.320669,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.636219,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.483132,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.031127969279999997,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21529819935,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04379189032,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03243409261,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.08150477110000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.2599514852,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03690735919,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.05015823135,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.0748865598,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.06947401282,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06484795645000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06287823196,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05721810379,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.05769802195,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.060015088529999996,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05595379844,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05595379844,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05595379844,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05595379844,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05595379844,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05595379844,
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
          "id": "821281ea3dd75772388cb0b4f7fbd2ce1bce6aa1",
          "message": "Allow changing schedule from TimeInterval --> IterationInterval on pickup (#5629)\n\nCo-authored-by: Taimoor Sohail <tsohail@spartan-bm133.hpc.unimelb.edu.au>",
          "timestamp": "2026-05-27T18:27:28Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/821281ea3dd75772388cb0b4f7fbd2ce1bce6aa1"
        },
        "date": 1779911691206,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.055958439650000004,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.431378,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.3406745,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 2.010196,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.4826315,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.995706,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.990202,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.988058,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.318334,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.636476,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.477116,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03265224522,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21501010059999998,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.04359416008,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03228747,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.08149167653999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.26116871749000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.03688984793,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.05016184826,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07486171967,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.06948294485,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06485781716,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06290609650000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05723908636,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0576206552,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.06004500116,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.055958439650000004,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.055958439650000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.055958439650000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.055958439650000004,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.055958439650000004,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.055958439650000004,
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
          "id": "7907d48dcc3064fd8aab1cf433ac4e64b4604294",
          "message": "Bump version from 0.108.1 to 0.109.0 (#5632)",
          "timestamp": "2026-05-27T20:35:49Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/7907d48dcc3064fd8aab1cf433ac4e64b4604294"
        },
        "date": 1779921940172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.05620600815000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.4317295,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.340482,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 2.01026,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.4822955,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.99577,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.990138,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 0.988283,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.318334,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.636541,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_split_explicit_transport_velocities_",
            "value": 0.476798,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.029008564809999998,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.21519161269,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.046560361019999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.03402185984,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.08151139701,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.26136200344,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.0369687613,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.05016032847,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.07484914324,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.07094484548999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.06485480624,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.06288793380999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.057209979300000005,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.057618499600000005,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.060098336659999994,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.05620600815000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.05620600815000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.05620600815000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.05620600815000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.05620600815000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.05620600815000001,
            "unit": "s/timestep"
          }
        ]
      }
    ]
  }
}