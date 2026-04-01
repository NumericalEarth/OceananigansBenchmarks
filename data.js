window.BENCHMARK_DATA = {
  "lastUpdate": 1775047076980,
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
          "id": "3d03e7aa3d496ef500719390c225117cfe409c8d",
          "message": "Streamline benchmarking pipeline (#5429)\n\n* Streamline benchmarking pipeline: remove duplicates, unify NSYS, fix concurrency\n\n- Remove duplicate benchmark runs: CATKE from Closure Sweep and\n  tripolar+zstar=false from Grid Type Sweep (already covered by Default)\n- Extract a single \"Default\" baseline run that gets injected into all\n  sweep charts, replacing the duplicated 360x180x50 entry in Resolution Sweep\n- Unify NSYS profiling into the benchmark step by wrapping the Default run\n  with nsys profile (no overhead), eliminating the separate NSYS step entirely\n- Consolidate Advection Sweep from 3 Julia invocations into 1 by zipping\n  momentum/tracer advection lists of equal length instead of crossing them\n- Report median kernel time instead of total in NSYS charts and summaries\n- Reduce default warmup steps from 10 to 5\n- Queue benchmark builds on main instead of canceling in-progress ones\n  (Buildkite concurrency group + GitHub Actions cancel-in-progress conditional)\n- Remove dead code (commented-out IO sweep)\n- Fix missing nsys_zstar.json artifact that was generated but never uploaded\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Parallelize benchmarks across GPU 0 and GPU 2, remove 5-tracer experiment\n\nSplit benchmark groups into two concurrent streams to reduce total wall time:\n- GPU 0 (foreground): Default (NSYS), Resolution sweep, Float type sweep, Closure sweep\n- GPU 2 (background): Advection sweep, Grid type sweep, Tracer count sweep\nResults are merged after both GPUs finish.\n\nAlso removes the 5-tracer (T,S,C1,C2,C3) experiment from the Tracer Count Sweep,\nkeeping only the 3-tracer case.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Replace NumericalEarth with DataDeps for benchmark bathymetry\n\nNumericalEarth.jl is only used in benchmarks to download and regrid\nbathymetry. Pre-generate the bathymetry files and serve them via\nDataDeps instead, removing the NumericalEarth dependency which is\ncurrently broken with the latest Oceananigans.\n\nAlso fix Buildkite pipeline interpolation of $! and $? by escaping\nthem as $$! and $$?.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* make the publish follow the pipeline\n\n* Pre-download bathymetry data before parallel GPU benchmarks\n\nFixes race condition where GPU 0 and GPU 2 processes concurrently\ntrigger the DataDeps download of bathymetry files to the same depot.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-27T06:21:46Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/3d03e7aa3d496ef500719390c225117cfe409c8d"
        },
        "date": 1774598134294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03194595404,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35183986341,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06620117009,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04934934019,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11836642944999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.30030145134,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04814823527,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07788111804,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12915444314,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.1006229349,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738016365,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09564457859999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08657489216,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08867287017,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09979503827,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09039273832,
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
          "id": "244ceed284d44a11d596eca3a2d479dbb5152661",
          "message": "Fix NSYS kernel charts and add kernel comparison to summary (#5440)\n\n* Fix NSYS kernel charts and add kernel comparison to summary\n\nThe NSYS kernel extraction was using a stale loop variable (`d` from a\nprevious loop) instead of the current iteration variable, so kernel chart\nentries were never emitted to the benchmark website. Move the extraction\nback into the main `for d in all_data` loop where it belongs.\n\nAlso add NSYS kernel comparison against main in the GitHub Actions job\nsummary, showing median time, baseline, and percentage change per kernel.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix token permissions for PR benchmark comments\n\nUse BENCHMARKS_TOKEN for repository_dispatch events (needs push access\nto the external OceananigansBenchmarks repo) and GITHUB_TOKEN for\npull_request events (needs PR comment access on this repo).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* fake commit\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-27T16:33:49Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/244ceed284d44a11d596eca3a2d479dbb5152661"
        },
        "date": 1774635629780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01252,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9576715,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7828245,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.557426,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.528209,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.520241,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.618183,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270968,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340702,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525693,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02946350052,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35170072867,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06635712049,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04941735279000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11839795846,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29974474885,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04813939653,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07597942123,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12939755415,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060468569999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09736463723,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09562428461,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0865149562,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08869534321,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09977233119,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09036038452,
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
          "id": "f70a4e492e5e24f2a12945c53561dbc396018d5c",
          "message": "Switch biases to be enums rather than distinct types. (#5318)\n\n* Switch biases to be enums rather than distinct types.\nMaking this change reduces the kernel execution time by reducing the branching in interpolations.\nI think that the since the bias was implemented as two types, Julia compiled to two different\nfunctions and then branched between them.\n\n* Fix tests for immersed advection\n\n* Temporarily disable sharding tests\n\n---------\n\nCo-authored-by: Jack Franklin <jdf58@cam.ac.uk>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Mosè Giordano <m.giordano@ucl.ac.uk>",
          "timestamp": "2026-03-27T22:46:39Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f70a4e492e5e24f2a12945c53561dbc396018d5c"
        },
        "date": 1774667022357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.013005,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.6095715,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.4392685,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6158315,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270522,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 1.043131,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 1.040923,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 1.035547,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339487,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526589,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03184448347,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.26203841452,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.059231267350000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.0337450151,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.09380287398,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29418761069,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048287356270000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06189951273,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.09998636162,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.0700525928,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.07194222790999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.07968828034,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05725823513,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.06513191983,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.07367442669,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.06870216942,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "William Moses",
            "username": "wsmoses",
            "email": "gh@wsmoses.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "14f35a2ab5d23753745b525813e6995ec6567a46",
          "message": "Revert \"Switch biases to be enums rather than distinct types. (#5318)\" (#5449)\n\nThis reverts commit f70a4e492e5e24f2a12945c53561dbc396018d5c.",
          "timestamp": "2026-03-29T16:52:48Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/14f35a2ab5d23753745b525813e6995ec6567a46"
        },
        "date": 1774808863719,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012202,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9585705,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7776115,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.553234,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.524723,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.517011,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6178795,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270842,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340862,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526269,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03174941831,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35176655005,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06358511806,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049371394049999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11834337352,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29950817934,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04840498223,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07610803865,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12884017587000002,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060143865,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09740798526000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09562017361000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0865001852,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08864160877999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09978739596000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09016108289,
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
      }
    ]
  }
}