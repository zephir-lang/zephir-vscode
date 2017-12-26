'use strict';

import * as path from 'path';

import { workspace, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';

export function activate(context: ExtensionContext) {
    // The server is implemented in node
    const serverModule = path.join(__dirname, 'server.js');

    // The debug options for the server
    const debugOptions = {
        execArgv: [
            "--nolazy",
            "--debug=6004"
        ]
    };

    // If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run : {
            module: serverModule,
            transport: TransportKind.ipc
        },
		debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: debugOptions
        }
    }

    // Options to control the language client
    const clientOptions: LanguageClientOptions = {
		documentSelector: [
            {
                scheme: 'file',
                language: 'zephir',
                pattern: '*.zep'
            }
        ],
		synchronize: {
			configurationSection: 'zephir',
			fileEvents: workspace.createFileSystemWatcher('**/.zlintrc')
        },
        initializationOptions: {}
    }

    // Create the language client and start the client.
    const client = new LanguageClient('zephir', 'Zephir Language Server', serverOptions, clientOptions);
    const disposable = client.start();

    // Push the disposable to the context's subscriptions so that the
	// client can be deactivated on extension deactivation
	context.subscriptions.push(disposable);
}
