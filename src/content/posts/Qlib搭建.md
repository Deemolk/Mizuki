---
title: Qlib量化项目搭建与使用
published: 2026-03-07
pinned: true
description: ""
tags: [Markdown, Example]
category: "Quant Trading"
licenseName: "Unlicensed"
author: Deemolk
sourceLink: ""
draft: false
---

# 介绍 Introduction

Qlib 是由微软亚洲研究院精心打造并开源的一款面向人工智能的量化投资平台。它的核心目标是将人工智能技术的力量引入量化投资领域，为研究人员、数据分析师和金融工程师提供一个从数据到模型、再到最终决策的全流程解决方案。
详见项目地址：https://github.com/microsoft/qlib

# 一、环境准备

本文测试环境默认以Windows系统为示例

## 1. 安装 Microsoft C++ Build Tools

### 1.1 下载生成工具

- 访问Microsoft官方网站的下载页面：https://visualstudio.microsoft.com/visual-cpp-build-tools/
- 点击“下载生成工具”按钮，下载适用于Windows的安装程序。

### 1.2 安装生成工具

- 运行下载的安装程序，选择“使用C++的桌面开发”工作负载
- 点击“安装”按钮，等待安装完成。
- 安装完成后，重启计算机以确保环境变量更新。

### 1.3 验证安装

```bash
python -c "import qlib; print(qlib.__version__)"
```

如果安装成功，你会看到类似这样的输出：

```bash
0.9.8.dev26
```

## 2. 安装Anaconda Distribution

### 1.1 下载安装包

- 访问Anaconda官方网站的下载页面：https://www.anaconda.com/download

### 1.2 运行安装程序

- 双击下载的 `.exe` 文件，按照图形化向导一步步操作
- 在“高级安装选项”中，**不推荐**勾选“Add Anaconda to my PATH environment variable”
- 建议使用Anaconda Prompt或Anaconda Navigator来启动

### 1.3 验证安装

```bash
conda --version
```

## 3. 创建Python 3.12环境


### 2.1 使用conda创建python 3.12环境

```bash
conda create -n qlib_env python=3.12
```

- `-n qlib_env`：指定环境名称为qlib_env（你可以自定义）
- `python=3.12`：指定安装Python 3.12版本

### 2.2 激活名为`qlib_env`的环境

```bash
conda activate qlib_env
```

- 激活成功后，命令行提示符会变成 `(qlib_env)`，表示你现在正处于新环境中
- 确保以后每次使用前先激活环境，再执行其他命令行

### 2.3 验证环境

```bash
python --version
```

- 应显示 Python 3.12.x

# 二、安装

## 1. 安装基础依赖

```bash
pip install numpy
pip install --upgrade cython
```
## 2. 克隆并安装

```bash
# 克隆仓库
git clone https://github.com/microsoft/qlib.git

# 进入`qlib`文件夹
cd qlib 

# 开发模式安装
pip install -e .[dev]
```

# 三、数据准备

## 1.下载数据源

```bash
# 1. 下载数据压缩包并保存文件
wget https://github.com/chenditc/investment_data/releases/latest/download/qlib_bin.tar.gz -OutFile qlib_bin.tar.gz

# 2. 创建Qlib默认的数据目录（如果不存在）
mkdir -p ./qlib_data

# 3. 解压数据到指定目录
tar -xzvf qlib_bin.tar.gz -C ./qlib_data --strip-components=1

# 4. 删除压缩包（可选）
Remove-Item -Force qlib_bin.tar.gz
```







