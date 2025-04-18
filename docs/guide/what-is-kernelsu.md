# What is KernelSU Next?

KernelSU Next is a root solution that works by running in kernel mode, providing kernel-level root access for Android devices. It is a fork of the original KernelSU project with additional features and improvements.

## Features

- Kernel-based root access
- Module system based on overlayfs
- [App profile](app-profile.md) (restrict root access)
- [Modularization of ksud](module-webui.md)
- WebUI support
- Module backup and restore
- Superuser list backup and restore
- Custom OverlayFS sparse image size
- Batch module installation
- Zygisk support (via ZygiskNext)
- And more!

## Supported Versions

KernelSU Next officially supports Android GKI 2.0 devices (Android 12+). Older versions can also work by manually building the kernel.

Currently supported Android versions:
- Android 14
- Android 13
- Android 12
- Android 11 (Core available)
- Android 10 (Core available)
- Android 9 (Core available)
- Android 8 (Core available)

Currently supported kernel versions:
- 6.x kernels (KMI 1, KMI 2)
- 5.15 kernels (KMI 0, legacy GKI)
- 5.10 kernels (KMI 0, legacy GKI)
- 5.4 kernels (non-GKI)
- 4.19 kernels (non-GKI)
- 4.14 kernels (non-GKI)
- 4.9 kernels (non-GKI)
- 4.4 kernels (non-GKI)
- 3.18 kernels (experimental)

## How to Install

Please check the [Installation guide](installation.md).

## Community

- [Telegram Group](https://t.me/ksunext)
- [GitHub](https://github.com/KernelSU-Next/KernelSU-Next)
