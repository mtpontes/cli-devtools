export default class JavaConstants {

  static NAME = "Java";

  static JDK_8 = { 
    name: "Eclipse Temurin 8",
    winget_id: "EclipseAdoptium.Temurin.8.JDK",
    main_dir: "jdk-8",
    installation_path: "C:\\Program Files (x86)\\Eclipse Adoptium"
  };
    
  static JDK_11 = { 
    name: "Eclipse Temurin 11",
    winget_id: "EclipseAdoptium.Temurin.11.JDK",
    main_dir: "jdk-11", 
    installation_path: "C:\\Program Files\\Eclipse Adoptium"
  };
    
  static JDK_17 = { 
    name: "Eclipse Temurin 17",
    main_dir: "jdk-17", 
    winget_id: "EclipseAdoptium.Temurin.17.JDK",
    installation_path: "C:\\Program Files\\Eclipse Adoptium"
  };
    
  static JDK_21 = { 
    name: "Eclipse Temurin 21",
    winget_id: "EclipseAdoptium.Temurin.21.JDK",
    main_dir: "jdk-21",
    installation_path: "C:\\Program Files\\Eclipse Adoptium"
  };
}