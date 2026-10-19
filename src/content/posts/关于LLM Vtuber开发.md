---
title: 关于LLM Vtuber的使用
published: 2025-09-26
pinned: false
description: ""
tags: [Markdown, LLM]
category: "Example"
licenseName: "Unlicensed"
author: Deemolk
sourceLink: ""
draft: true
---

# GPT-Sovits

# 关于可能出现的问题

默认安装的Pytorch版本为CPU版本，需要自行手动卸载Pytorch并重新安装CUDA版本的Pytorch


此命令会从PyTorch官方提供的、专门存放CUDA 12.8编译版本的地址下载

pip install torch==2.8.0 --index-url https://download.pytorch.org/whl/cu121 -v | findstr "Downloading"

# 若默认用CPU推理，需要自行更改设置

编辑路径"GPT-SoVITS-v2pro-20250604-nvidia50\GPT_SoVITS\configs\tts_infer.yaml"下的文件，将"device: cpu" 更改为 "device: cuda:0"

# GPU并行计算推理




