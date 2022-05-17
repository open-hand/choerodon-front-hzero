# choerodon-front-hzero

Gateway of Choerodon.

## Installing the Chart

To install the chart with the release name `choerodon-front-hzero`:

```console
$ helm repo add c7n https://openchart.choerodon.com.cn/choerodon/c7n
$ helm repo update
$ helm install choerodon-front-hzero c7n/choerodon-front-hzero
```

Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`.

## Uninstalling the Chart

```bash
$ helm delete choerodon-front-hzero
```

## Requirements

| Repository | Name | Version |
|------------|------|---------|
| https://openchart.choerodon.com.cn/choerodon/c7n | common | 1.x.x |

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| affinity | object | `{}` | Affinity for pod assignment. Evaluated as a template. Note: podAffinityPreset, podAntiAffinityPreset, and nodeAffinityPreset will be ignored when it's set |
| args | list | `[]` | Args for running the server container (set to default if not set). Use array form |
| automountServiceAccountToken | bool | `false` | AutomountServiceAccountToken indicates whether a service account token should be automatically mounted. |
| base.pullPolicy | string | `"IfNotPresent"` | Specify a imagePullPolicy |
| base.pullSecrets | list | `[]` | Optionally specify an array of imagePullSecrets. |
| base.registry | string | `"registry.cn-shanghai.aliyuncs.com"` | Java base image registry |
| base.repository | string | `"c7n/frontbase"` | Java base image repository |
| base.tag | string | `"0.10.0"` | Java base image tag |
| command | list | `[]` | Command for running the server container (set to default if not set). Use array form |
| commonAnnotations | object | `{}` | Add annotations to all the deployed resources |
| commonLabels | object | `{}` | Add labels to all the deployed resources |
| containerPort.serverPort | int | `8080` | server port |
| customLivenessProbe | object | `{}` | Custom Liveness |
| customReadinessProbe | object | `{}` | Custom Readiness |
| customStartupProbe | object | `{}` | Custom Startup probes |
| enableServiceLinks | bool | `false` | EnableServiceLinks indicates whether information about services should be injected into pod's environment variables,  matching the syntax of Docker links. Optional: Defaults to false. |
| extraEnv.BUILD_API_HOST | string | `"http://backend.hzero.org"` |  |
| extraEnv.BUILD_BASE_PATH | string | `"/"` |  |
| extraEnv.BUILD_BPM_HOST | string | `"http://bpm.hzero.org"` |  |
| extraEnv.BUILD_CLIENT_ID | string | `"localhost"` |  |
| extraEnv.BUILD_CUSTOMIZE_ICON_NAME | string | `"icon-font"` |  |
| extraEnv.BUILD_PLATFORM_VERSION | string | `"SAAS"` |  |
| extraEnv.BUILD_PUBLIC_URL | string | `"/"` |  |
| extraEnv.BUILD_TOP_MENU_LABELS | string | `"HZERO_MENU"` |  |
| extraEnv.BUILD_TOP_MENU_UNION_LABEL | bool | `true` |  |
| extraEnv.BUILD_WEBSOCKET_HOST | string | `"ws://ws.hzero.org"` |  |
| extraEnv.CUSTOMIZE_ICON_NAME | string | `"BUILD_CUSTOMIZE_ICON_NAME"` |  |
| extraEnv.IM_ENABLE | string | `"BUILD_IM_ENABLE"` |  |
| extraEnv.IM_WEBSOCKET_HOST | string | `"BUILD_IM_WEBSOCKET_HOST"` |  |
| extraEnv.PUPPETEER_SKIP_CHROMIUM_DOWNLOAD | bool | `true` |  |
| extraEnv.TOP_MENU_LABELS | string | `"HZERO_MENU"` |  |
| extraEnv.TOP_MENU_UNION_LABEL | bool | `true` |  |
| extraEnv.TRACE_LOG_ENABLE | string | `"BUILD_TRACE_LOG_ENABLE"` |  |
| extraEnvVarsCM | string | `""` | ConfigMap with extra environment variables |
| extraEnvVarsSecret | string | `""` | Secret with extra environment variables |
| extraVolumeMounts | list | `[]` | Extra volume mounts to add to server containers |
| extraVolumes | list | `[]` | Extra volumes to add to the server statefulset |
| fullnameOverride | string | `nil` | String to fully override common.names.fullname template |
| global.imagePullSecrets | list | `[]` | Global Docker registry secret names as an array |
| global.imageRegistry | string | `nil` | Global Docker image registry |
| global.storageClass | string | `nil` | Global StorageClass for Persistent Volume(s) |
| hostAliases | list | `[]` | server pod host aliases |
| image.pullPolicy | string | `"IfNotPresent"` | Specify a imagePullPolicy. Defaults to 'Always' if image tag is 'latest', else set to 'IfNotPresent' |
| image.pullSecrets | list | `[]` | Optionally specify an array of imagePullSecrets. Secrets must be manually created in the namespace. |
| image.registry | string | `"registry.cn-shanghai.aliyuncs.com"` | service image registry |
| image.repository | string | `"c7n/choerodon-front-hzero"` | service image repository |
| image.tag | string | `nil` | service image tag. Default Chart.AppVersion |
| ingress.annotations | object | `{}` | Additional annotations for the Ingress resource. To enable certificate autogeneration, place here your cert-manager annotations. |
| ingress.apiVersion | string | `""` | Force Ingress API version (automatically detected if not set) |
| ingress.enabled | bool | `false` | Enable ingress record generation for Discourse |
| ingress.extraHosts | list | `[]` | An array with additional hostname(s) to be covered with the ingress record |
| ingress.extraPaths | list | `[]` | An array with additional arbitrary paths that may need to be added to the ingress under the main host |
| ingress.extraTls | list | `[]` | TLS configuration for additional hostname(s) to be covered with this ingress record |
| ingress.hostname | string | `"server.local"` | Default host for the ingress record |
| ingress.ingressClassName | string | `""` | IngressClass that will be be used to implement the Ingress (Kubernetes 1.18+) |
| ingress.path | string | `"/"` | Default path for the ingress record |
| ingress.pathType | string | `"ImplementationSpecific"` | Ingress path type |
| ingress.secrets | list | `[]` | Custom TLS certificates as secrets |
| ingress.selfSigned | bool | `false` | Create a TLS secret for this ingress record using self-signed certificates generated by Helm |
| ingress.tls | bool | `false` | Enable TLS configuration for the host defined at `ingress.hostname` parameter |
| initContainers | object | `{}` | Add init containers to the server pods. |
| kubeVersion | string | `nil` | Force target Kubernetes version (using Helm capabilites if not set) |
| livenessProbe.enabled | bool | `true` | Enable livenessProbe |
| livenessProbe.failureThreshold | int | `5` | Failure threshold for livenessProbe |
| livenessProbe.initialDelaySeconds | int | `60` | Initial delay seconds for livenessProbe |
| livenessProbe.periodSeconds | int | `5` | Period seconds for livenessProbe |
| livenessProbe.successThreshold | int | `1` | Success threshold for livenessProbe |
| livenessProbe.timeoutSeconds | int | `3` | Timeout seconds for livenessProbe |
| nameOverride | string | `nil` | String to partially override common.names.fullname template (will maintain the release name) |
| nodeAffinityPreset.key | string | `""` | Node label key to match |
| nodeAffinityPreset.type | string | `""` | Node affinity type. Allowed values: soft, hard |
| nodeAffinityPreset.values | list | `[]` | Node label values to match |
| nodeSelector | object | `{}` | Node labels for pod assignment. Evaluated as a template. |
| persistence.accessModes | list | `["ReadWriteOnce"]` | Persistent Volume Access Mode |
| persistence.annotations | object | `{}` | Persistent Volume Claim annotations |
| persistence.enabled | bool | `false` | If true, use a Persistent Volume Claim, If false, use emptyDir |
| persistence.existingClaim | string | `nil` | Enable persistence using an existing PVC |
| persistence.mountPath | string | `"/data"` | Data volume mount path |
| persistence.size | string | `"8Gi"` | Persistent Volume size |
| persistence.storageClass | string | `nil` | Persistent Volume Storage Class |
| podAffinityPreset | string | `""` | Pod affinity preset. Allowed values: soft, hard |
| podAnnotations | object | `{}` | Pod annotations |
| podAntiAffinityPreset | string | `"soft"` | Pod anti-affinity preset. Allowed values: soft, hard |
| podLabels | object | `{}` | Pod labels |
| readinessProbe.enabled | bool | `true` | Enable readinessProbe |
| readinessProbe.failureThreshold | int | `5` | Failure threshold for readinessProbe |
| readinessProbe.initialDelaySeconds | int | `5` | Initial delay seconds for readinessProbe |
| readinessProbe.periodSeconds | int | `5` | Period seconds for readinessProbe |
| readinessProbe.successThreshold | int | `1` | Success threshold for readinessProbe |
| readinessProbe.timeoutSeconds | int | `3` | Timeout seconds for readinessProbe |
| replicaCount | int | `1` | Number of deployment replicas |
| resources.limits | object | `{"memory":"128Mi"}` | The resources limits for the init container |
| resources.requests | object | `{"memory":"128Mi"}` | The requested resources for the init container |
| schedulerName | string | `nil` | Scheduler name |
| securityContext | object | `{"enabled":true,"fsGroup":101,"runAsUser":101}` | Security Context |
| service.annotations | object | `{}` | Provide any additional annotations which may be required. This can be used to set the LoadBalancer service type to internal only. |
| service.enabled | bool | `true` | Set to true to enable service record generation |
| service.externalTrafficPolicy | string | `"Cluster"` | Enable client source IP preservation |
| service.loadBalancerIP | string | `nil` | loadBalancerIP for the server Service (optional, cloud specific) |
| service.loadBalancerSourceRanges | list | `[]` | Load Balancer sources |
| service.nodePort | object | `{"server":30154}` | Specify the nodePort value for the LoadBalancer and NodePort service types. |
| service.port | object | `{"server":8080}` | server Service port |
| service.type | string | `"ClusterIP"` | server Service type |
| serviceAccount.create | bool | `false` | Set to true to create serviceAccount |
| serviceAccount.name | string | `""` | The name of the ServiceAccount to use. |
| sidecars | object | `{}` | Add sidecars to the server pods. |
| startupProbe.enabled | bool | `false` | Enable startupProbe |
| startupProbe.failureThreshold | int | `60` | Failure threshold for startupProbe |
| startupProbe.initialDelaySeconds | int | `0` | Initial delay seconds for startupProbe |
| startupProbe.periodSeconds | int | `5` | Period seconds for startupProbe |
| startupProbe.successThreshold | int | `1` | Success threshold for startupProbe |
| startupProbe.timeoutSeconds | int | `3` | Timeout seconds for startupProbe |
| tolerations | list | `[]` | Tolerations for pod assignment. Evaluated as a template. |
| updateStrategy.rollingUpdate | object | `{"maxSurge":"100%","maxUnavailable":0}` | Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. |
| updateStrategy.type | string | `"RollingUpdate"` | Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate. |
| volumePermissionsEnabled | bool | `false` | Change the owner and group of the persistent volume mountpoint to runAsUser:fsGroup values from the securityContext section. |
| workingDir | string | `"/usr/share/nginx/html"` | Container's working directory(Default mountPath). |

## Maintainers

| Name | Email | Url |
| ---- | ------ | --- |
| choerodon | zhuchiyu@vip.hand-china.com | https://choerodon.io |
