/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  AdditionalCapabilities,
  AdditionalUnattendContent,
  ApiEntityReference,
  ApiError,
  ApiErrorBase,
  AutomaticOSUpgradePolicy,
  AutomaticOSUpgradeProperties,
  AutomaticRepairsPolicy,
  AvailabilitySet,
  AvailabilitySetUpdate,
  AvailablePatchSummary,
  BaseResource,
  BillingProfile,
  BootDiagnostics,
  BootDiagnosticsInstanceView,
  CloudError,
  CloudService,
  CloudServiceExtensionProfile,
  CloudServiceExtensionProperties,
  CloudServiceNetworkProfile,
  CloudServiceOsProfile,
  CloudServiceProperties,
  CloudServiceRoleProfile,
  CloudServiceRoleProfileProperties,
  CloudServiceRoleSku,
  CloudServiceVaultAndSecretReference,
  CloudServiceVaultCertificate,
  CloudServiceVaultSecretGroup,
  CreationData,
  DataDisk,
  DataDiskImage,
  DataDiskImageEncryption,
  DedicatedHost,
  DedicatedHostAllocatableVM,
  DedicatedHostAvailableCapacity,
  DedicatedHostGroup,
  DedicatedHostGroupInstanceView,
  DedicatedHostGroupListResult,
  DedicatedHostGroupUpdate,
  DedicatedHostInstanceView,
  DedicatedHostInstanceViewWithName,
  DedicatedHostUpdate,
  DiagnosticsProfile,
  DiffDiskSettings,
  Disallowed,
  DisallowedConfiguration,
  Disk,
  DiskAccess,
  DiskEncryptionSet,
  DiskEncryptionSetParameters,
  DiskEncryptionSettings,
  DiskImageEncryption,
  DiskInstanceView,
  DiskSecurityProfile,
  DiskSku,
  Encryption,
  EncryptionImages,
  EncryptionSetIdentity,
  EncryptionSettingsCollection,
  EncryptionSettingsElement,
  ExtendedLocation,
  Extension,
  Gallery,
  GalleryApplication,
  GalleryApplicationUpdate,
  GalleryApplicationVersion,
  GalleryApplicationVersionPublishingProfile,
  GalleryApplicationVersionUpdate,
  GalleryArtifactPublishingProfileBase,
  GalleryArtifactVersionSource,
  GalleryDataDiskImage,
  GalleryDiskImage,
  GalleryIdentifier,
  GalleryImage,
  GalleryImageFeature,
  GalleryImageIdentifier,
  GalleryImageUpdate,
  GalleryImageVersion,
  GalleryImageVersionPublishingProfile,
  GalleryImageVersionStorageProfile,
  GalleryImageVersionUpdate,
  GalleryOSDiskImage,
  GalleryUpdate,
  HardwareProfile,
  Image,
  ImageDataDisk,
  ImageDisk,
  ImageDiskReference,
  ImageOSDisk,
  ImagePurchasePlan,
  ImageReference,
  ImageStorageProfile,
  ImageUpdate,
  InnerError,
  InstanceViewStatus,
  KeyForDiskEncryptionSet,
  KeyVaultAndKeyReference,
  KeyVaultAndSecretReference,
  KeyVaultKeyReference,
  KeyVaultSecretReference,
  LastPatchInstallationSummary,
  LinuxConfiguration,
  LinuxPatchSettings,
  LoadBalancerConfiguration,
  LoadBalancerConfigurationProperties,
  LoadBalancerFrontendIPConfiguration,
  LoadBalancerFrontendIPConfigurationProperties,
  MaintenanceRedeployStatus,
  ManagedDiskParameters,
  NetworkInterfaceReference,
  NetworkProfile,
  OSDisk,
  OSDiskImage,
  OSDiskImageEncryption,
  OSProfile,
  PatchSettings,
  Plan,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateLinkServiceConnectionState,
  PropertyUpdatesInProgress,
  ProximityPlacementGroup,
  ProximityPlacementGroupUpdate,
  ProxyResource,
  PublicIPAddressSku,
  PurchasePlan,
  RecommendedMachineConfiguration,
  RegionalReplicationStatus,
  ReplicationStatus,
  Resource,
  ResourceRange,
  RestorePoint,
  RestorePointCollection,
  RestorePointCollectionSourceProperties,
  RestorePointCollectionUpdate,
  RestorePointProvisioningDetails,
  RestorePointSourceMetadata,
  RestorePointSourceVMDataDisk,
  RestorePointSourceVMOSDisk,
  RestorePointSourceVMStorageProfile,
  RollingUpgradePolicy,
  RollingUpgradeProgressInfo,
  RollingUpgradeRunningStatus,
  RollingUpgradeStatusInfo,
  RunCommandInputParameter,
  ScaleInPolicy,
  ScheduledEventsProfile,
  SecurityProfile,
  ShareInfoElement,
  SharingProfile,
  SharingProfileGroup,
  SharingUpdate,
  Sku,
  Snapshot,
  SnapshotSku,
  SourceVault,
  SshConfiguration,
  SshPublicKey,
  SshPublicKeyResource,
  SshPublicKeyUpdateResource,
  StorageProfile,
  SubResource,
  SubResourceReadOnly,
  SubResourceWithColocationStatus,
  TargetRegion,
  TerminateNotificationProfile,
  UefiSettings,
  UpdateResource,
  UpdateResourceDefinition,
  UpgradePolicy,
  UserArtifactManage,
  UserArtifactSource,
  VaultCertificate,
  VaultSecretGroup,
  VirtualHardDisk,
  VirtualMachine,
  VirtualMachineAgentInstanceView,
  VirtualMachineCaptureResult,
  VirtualMachineExtension,
  VirtualMachineExtensionHandlerInstanceView,
  VirtualMachineExtensionImage,
  VirtualMachineExtensionInstanceView,
  VirtualMachineExtensionUpdate,
  VirtualMachineHealthStatus,
  VirtualMachineIdentity,
  VirtualMachineIdentityUserAssignedIdentitiesValue,
  VirtualMachineImage,
  VirtualMachineImageFeature,
  VirtualMachineImageResource,
  VirtualMachineInstanceView,
  VirtualMachineIpTag,
  VirtualMachineNetworkInterfaceConfiguration,
  VirtualMachineNetworkInterfaceDnsSettingsConfiguration,
  VirtualMachineNetworkInterfaceIPConfiguration,
  VirtualMachinePatchStatus,
  VirtualMachinePublicIPAddressConfiguration,
  VirtualMachinePublicIPAddressDnsSettingsConfiguration,
  VirtualMachineRunCommand,
  VirtualMachineRunCommandInstanceView,
  VirtualMachineRunCommandScriptSource,
  VirtualMachineRunCommandUpdate,
  VirtualMachineScaleSet,
  VirtualMachineScaleSetDataDisk,
  VirtualMachineScaleSetExtension,
  VirtualMachineScaleSetExtensionProfile,
  VirtualMachineScaleSetExtensionUpdate,
  VirtualMachineScaleSetIdentity,
  VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue,
  VirtualMachineScaleSetIPConfiguration,
  VirtualMachineScaleSetIpTag,
  VirtualMachineScaleSetManagedDiskParameters,
  VirtualMachineScaleSetNetworkConfiguration,
  VirtualMachineScaleSetNetworkConfigurationDnsSettings,
  VirtualMachineScaleSetNetworkProfile,
  VirtualMachineScaleSetOSDisk,
  VirtualMachineScaleSetOSProfile,
  VirtualMachineScaleSetPublicIPAddressConfiguration,
  VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings,
  VirtualMachineScaleSetStorageProfile,
  VirtualMachineScaleSetUpdate,
  VirtualMachineScaleSetUpdateIPConfiguration,
  VirtualMachineScaleSetUpdateNetworkConfiguration,
  VirtualMachineScaleSetUpdateNetworkProfile,
  VirtualMachineScaleSetUpdateOSDisk,
  VirtualMachineScaleSetUpdateOSProfile,
  VirtualMachineScaleSetUpdatePublicIPAddressConfiguration,
  VirtualMachineScaleSetUpdateStorageProfile,
  VirtualMachineScaleSetUpdateVMProfile,
  VirtualMachineScaleSetVM,
  VirtualMachineScaleSetVMExtension,
  VirtualMachineScaleSetVMExtensionUpdate,
  VirtualMachineScaleSetVMInstanceView,
  VirtualMachineScaleSetVMNetworkProfileConfiguration,
  VirtualMachineScaleSetVMProfile,
  VirtualMachineScaleSetVMProtectionPolicy,
  VirtualMachineUpdate,
  WindowsConfiguration,
  WinRMConfiguration,
  WinRMListener
} from "../models/mappers";
