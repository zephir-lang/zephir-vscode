# Change Log

All notable changes to the "Zephir for VSCode" will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [1.6.1] - 2018-01-03

### Changed
- Improved support of `typeof` operator
- Improved support of `self`, `static` and `parent` highlighting
- Fully refactored highlighting of docblocks

## [1.6.0] - 2018-01-02

### Added
- Added support of `for ..., ... in reverse` highlighting

### Changed
- Improved constants recognition
- Improved support of `this` highlighting
- Improved highlighting for functions and classes begins with `$`

### Fixed
- Removed reundant constants declaration
- Return back [Magic Methods](http://php.net/manual/en/language.oop5.magic.php) recognition

## [1.5.0] - 2017-12-28

### Added
- Added support for `istring` type highlighting
- Added support for `fn` (`function` alias) highlighting

### Fixed
- Fixed highlighting for functions begins with `$` (e.g. `$fetch`)
- Fixed highlighting for classes begins with `$` (e.g. `$Resource`)

## [1.4.1] - 2017-12-28

### Changed
- A large code cleanup regarding excessive or duplicate pattern matching

### Fixed
- Fixed support for builtin function call highlighting

## [1.4.0] - 2017-12-27

### Added
- Introduced smart indent rules based on controll flow and language statements
- Amended code snippets

### Fixed
- Improved matching for curly braces

## [1.3.3] - 2017-12-27

### Cahnged
- Improved Regions Folding

## [1.3.2] - 2017-12-25

### Cahnged
- Bump required VSCode version
- Code cleanup. This project is only for syntax highlighting and snippets support

## [1.3.1] - 2017-12-24
### Fixed
 - Fixed support of `this` and globals highlighting

## [1.3.0] - 2017-12-24
### Added
 - Added support of type hint highlighting for function parameters

## [1.2.0] - 2017-12-24
### Added
 - Added support of type hint highlighting

### Fixed
- Fixed highlighting of arrays
- Fixed highlighting of variable names

## [1.1.0] - 2017-12-24

### Added
 - Initial snippets support

## 1.0.0 - 2017-12-24
### Added
 - Initial stable release

[Unreleased]: https://github.com/zephir-lang/zephir-vscode/compare/v1.6.1...HEAD
[1.6.1]: https://github.com/zephir-lang/zephir-vscode/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/zephir-lang/zephir-vscode/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/zephir-lang/zephir-vscode/compare/v1.4.1...v1.5.0
[1.4.1]: https://github.com/zephir-lang/zephir-vscode/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/zephir-lang/zephir-vscode/compare/v1.3.3...v1.4.0
[1.3.3]: https://github.com/zephir-lang/zephir-vscode/compare/v1.3.2...v1.3.3
[1.3.2]: https://github.com/zephir-lang/zephir-vscode/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/zephir-lang/zephir-vscode/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/zephir-lang/zephir-vscode/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/zephir-lang/zephir-vscode/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/zephir-lang/zephir-vscode/compare/v1.0.0...v1.1.0
