/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ContainerRegistryImpl,
  ContainerRegistryBlobImpl,
  AuthenticationImpl
} from "./operations";
import {
  ContainerRegistry,
  ContainerRegistryBlob,
  Authentication
} from "./operationsInterfaces";
import { GeneratedClientContext } from "./generatedClientContext";
import { GeneratedClientOptionalParams } from "./models";

/** @internal */
export class GeneratedClient extends GeneratedClientContext {
  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param url Registry login URL
   * @param options The parameter options
   */
  constructor(url: string, options?: GeneratedClientOptionalParams) {
    super(url, options);
    this.containerRegistry = new ContainerRegistryImpl(this);
    this.containerRegistryBlob = new ContainerRegistryBlobImpl(this);
    this.authentication = new AuthenticationImpl(this);
  }

  containerRegistry: ContainerRegistry;
  containerRegistryBlob: ContainerRegistryBlob;
  authentication: Authentication;
}
