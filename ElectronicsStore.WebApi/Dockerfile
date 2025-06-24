FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

RUN groupadd -r appgroup &&  \
    useradd -r -g appgroup -d /home/appuser -m appuser

WORKDIR /app
EXPOSE 5555

RUN mkdir -p /app/data-protection-keys &&  \
    chown -R appuser:appgroup /app/data-protection-keys

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["ElectronicsStore.WebApi/ElectronicsStore.WebApi.csproj", "ElectronicsStore.WebApi/"]
RUN dotnet restore "ElectronicsStore.WebApi/ElectronicsStore.WebApi.csproj"
COPY . .
WORKDIR "/src/ElectronicsStore.WebApi"
RUN dotnet build "ElectronicsStore.WebApi.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "ElectronicsStore.WebApi.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

RUN chown -R appuser:appgroup /app
USER appuser

ENTRYPOINT ["dotnet", "ElectronicsStore.WebApi.dll"]
