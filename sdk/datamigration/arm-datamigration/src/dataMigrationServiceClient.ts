/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { DataMigrationServiceClientContext } from "./dataMigrationServiceClientContext";


class DataMigrationServiceClient extends DataMigrationServiceClientContext {
  // Operation groups
  resourceSkus: operations.ResourceSkus;
  services: operations.Services;
  tasks: operations.Tasks;
  serviceTasks: operations.ServiceTasks;
  projects: operations.Projects;
  usages: operations.Usages;
  operations: operations.Operations;
  files: operations.Files;

  /**
   * Initializes a new instance of the DataMigrationServiceClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId Identifier of the subscription
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.DataMigrationServiceClientOptions) {
    super(credentials, subscriptionId, options);
    this.resourceSkus = new operations.ResourceSkus(this);
    this.services = new operations.Services(this);
    this.tasks = new operations.Tasks(this);
    this.serviceTasks = new operations.ServiceTasks(this);
    this.projects = new operations.Projects(this);
    this.usages = new operations.Usages(this);
    this.operations = new operations.Operations(this);
    this.files = new operations.Files(this);
  }
}

// Operation Specifications

export {
  DataMigrationServiceClient,
  DataMigrationServiceClientContext,
  Models as DataMigrationServiceModels,
  Mappers as DataMigrationServiceMappers
};
export * from "./operations";
