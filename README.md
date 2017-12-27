# Zephir syntax support for VSCode

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![Version](https://vsmarketplacebadge.apphb.com/version-short/zephir-lang.zephir.svg)](https://marketplace.visualstudio.com/items?itemName=zephir-lang.zephir)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/zephir-lang.zephir.svg)](https://marketplace.visualstudio.com/items?itemName=zephir-lang.zephir)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/zephir-lang.zephir.svg)](https://marketplace.visualstudio.com/items?itemName=zephir-lang.zephir)

[Zephir Language](https://zephir-lang.com) syntax highlighting and snippets for VSCode.

---

[Become a sponsor](https://opencollective.com/phalcon#sponsor) | [Become a backer](https://opencollective.com/phalcon#backer).

## Features <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

* Highlighting
  - [x] Basic highlighting
  - [x] Advanced syntax highlighting for Zephir

* Editing
  - [x] Completion and snippets
  - [x] Smart Bracket Matching
  - [x] Smart indent rules

* Navigation
  - [x] [Regions Folding](https://code.visualstudio.com/docs/editor/codebasics#_folding) by markers:
    - `// #region` and `// #endregion`
    - `// <editor-fold>` and `// </editor-fold>`

## Getting Started <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

You can install this extension through the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=zephir-lang.zephir).

## Recommended Syntax Themes <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

Although syntax highlighting should display well in most themes we recommend and test with the following:

* [Atom One Dark](https://marketplace.visualstudio.com/items?itemName=freebroccolo.theme-atom-one-dark)
* Dark+ (default theme)
* [Zephyr](https://marketplace.visualstudio.com/items?itemName=atrX.vscode-zephyr-theme)
* [Flatland Monokai](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-FlatlandMonokai)
* [Oceanic Next](https://marketplace.visualstudio.com/items?itemName=naumovs.theme-oceanicnext)

## Installation <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

### Using VSCode Command Pallete <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

Open the *Command Pallete*:

* <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> [Linux][linux-kbd] <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
* <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> [macOS][macos-kbd] <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>
* <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> [Windows][windows-kbd] <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>

Then type "Install Extensions" and hit <kbd>Enter</kbd>. Finally find "Zephir for VSCode" and hit <kbd>Enter</kbd>.

Once the extension is installed, reload VSCode.

### Packaged VSIX Extension <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

[Download the latest .vsix release](https://github.com/zephir-lang/zephir-vscode/releases/latest) file from the GitHub repository
and install it from the command line:

```sh
code --install-extension zephir-*.*.*.vsix
```

or from within VS Code by launching *Quick Open* and running the *Install from VSIX...* command.

Once the extension is installed, reload VSCode.

### GitHub Repository Clone <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

Change to your `.vscode/extensions` [VSCode extensions directory](https://code.visualstudio.com/docs/extensions/install-extension#_side-loading).
Depending on your platform it is located in the following folders:

* <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> `$HOME/.vscode/extensions`
* <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> `$HOME/.vscode/extensions`
* <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> `%USERPROFILE%\.vscode\extensions`

Clone extension repository as `zephir-lang.zephir`:

```sh
git clone https://github.com/zephir-lang/zephir-vscode.git zephir-lang.zephir
```

Once the extension is cloned, reload VSCode.

## Contributing <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

The source for this extension is available on [GitHub](https://github.com/zephir-lang/zephir-vscode). If anyone feels that there is
something missing or would like to suggest improvements please [open a new issue](https://github.com/zephir-lang/zephir-vscode/issues)
or send a pull request. Instructions for running/debugging extensions locally [here](https://code.visualstudio.com/docs/extensions/overview).

## Discussion <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

There is an `#editorsupport` channel on the Phalcon [Discord Server](https://discord.gg/PNFsSsr).
If you would like to discuss an idea or need help or have other feedback you can usually find me (`@klay`) idling there.

## License <sup>[↑](#zephir-syntax-support-for-vscode)</sup>

This project is open source software licensed under the MIT License.
See the [LICENSE](https://github.com/zephir-lang/zephir-vscode/blob/master/LICENSE) file for more.

---

<p align="center">Copyright &copy; 2017-present Zephir Team</p>

[linux-kbd]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf
[macos-kbd]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
[windows-kbd]: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
